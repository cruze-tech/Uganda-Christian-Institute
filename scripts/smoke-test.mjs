import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

const requiredRoutes = ['/', '/about', '/programmes', '/admissions', '/gallery', '/news', '/contact', '/online-portal', '/downloads', '/application-forms', '/404'];
const routeMarkers = {
  '/': 'Home Overview',
  '/about': 'About UCI Lira',
  '/programmes': 'Programmes Catalogue',
  '/admissions': 'Admissions Guide',
  '/gallery': 'Visual Gallery',
  '/news': 'News and Updates',
  '/contact': 'Contact UCI Lira',
  '/online-portal': 'Online Portal',
  '/downloads': 'Downloads',
  '/application-forms': 'Application Forms',
  '/404': '404 Error'
};

const navRoutes = ['/', '/about', '/programmes', '/admissions', '/gallery', '/news', '/contact'];
const galleryCategories = ['Campus', 'Training', 'Midwifery', 'Academic', 'Graduation'];
const requiredProgrammeSlugs = [
  'certificate-in-enrolled-nursing',
  'certificate-in-midwifery',
  'diploma-in-nursing-direct',
  'diploma-in-midwifery-direct',
  'diploma-in-nursing-extension',
  'diploma-in-midwifery-extension'
];

function routeToFile(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }
  if (route === '/404') {
    return path.join(distDir, '404.html');
  }

  const routePath = route.replace(/^\//, '');
  return path.join(distDir, routePath, 'index.html');
}

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function walkHtmlFiles(rootDir) {
  const files = [];

  function visit(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        visit(full);
      } else if (entry.isFile() && full.endsWith('.html')) {
        files.push(full);
      }
    }
  }

  visit(rootDir);
  return files;
}

const failures = [];

if (!fs.existsSync(distDir)) {
  failures.push(`Missing dist directory: ${distDir}`);
} else {
  for (const route of requiredRoutes) {
    const file = routeToFile(route);
    if (!fs.existsSync(file)) {
      failures.push(`Missing built route file for ${route}: ${file}`);
      continue;
    }

    const content = read(file);
    const marker = routeMarkers[route];
    if (!content.includes(marker)) {
      failures.push(`Missing route marker for ${route}: "${marker}"`);
    }

    for (const navRoute of navRoutes) {
      if (!content.includes(`href="${navRoute}"`)) {
        failures.push(`Route ${route} is missing nav link: ${navRoute}`);
      }
    }
  }

  const galleryFile = routeToFile('/gallery');
  if (fs.existsSync(galleryFile)) {
    const galleryHtml = read(galleryFile);

    for (const category of galleryCategories) {
      if (!galleryHtml.includes(category)) {
        failures.push(`Gallery page missing category label: ${category}`);
      }
    }

    const imageMatches = [...galleryHtml.matchAll(/<img[^>]+src="([^"]+)"/g)];
    const galleryImages = imageMatches
      .map((match) => match[1])
      .filter((src) => src.startsWith('/images/'));

    if (galleryImages.length < 12) {
      failures.push(`Expected at least 12 local gallery images, found ${galleryImages.length}`);
    }

    for (const src of galleryImages) {
      if (!src.endsWith('.webp')) {
        failures.push(`Gallery image is not WebP: ${src}`);
      }
      if (/^https?:\/\//i.test(src)) {
        failures.push(`Gallery image should be local path, found external URL: ${src}`);
      }
    }
  } else {
    failures.push('Gallery route file missing; cannot run gallery checks.');
  }

  const htmlFiles = walkHtmlFiles(distDir);
  for (const file of htmlFiles) {
    const html = read(file);

    if (/<img[^>]+src=["']https?:\/\//i.test(html)) {
      failures.push(`External image src found in ${path.relative(distDir, file)}`);
    }

    if (/<img[^>]+srcset=["'][^"']*https?:\/\//i.test(html)) {
      failures.push(`External image srcset found in ${path.relative(distDir, file)}`);
    }
  }

  for (const slug of requiredProgrammeSlugs) {
    const detailFile = path.join(distDir, 'programmes', slug, 'index.html');
    if (!fs.existsSync(detailFile)) {
      failures.push(`Missing programme detail route: /programmes/${slug}`);
      continue;
    }

    const detailHtml = read(detailFile);
    if (!detailHtml.includes('Programme Detail')) {
      failures.push(`Programme detail marker missing for /programmes/${slug}`);
    }
    if (!detailHtml.includes('Apply via Portal')) {
      failures.push(`Programme detail CTA missing for /programmes/${slug}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Smoke test failed with the following issues:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Smoke test passed. Required routes, navigation, gallery categories, and local WebP image checks are valid.');
