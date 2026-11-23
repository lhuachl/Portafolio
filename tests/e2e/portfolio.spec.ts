import { expect, test } from '@playwright/test';

test('la home carga con título y hero', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Portafolio/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Hola, soy');
  await expect(page.getByRole('navigation', { name: 'Principal' })).toBeVisible();
});

test('lista proyectos y navega al detalle de uno', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('article.card');
  await expect(cards.first()).toBeVisible();
  expect(await cards.count()).toBeGreaterThanOrEqual(3);

  await page.getByRole('link', { name: 'port_scan' }).first().click();
  await expect(page).toHaveURL(/\/projects\/port-scan\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('port_scan');
  await page.getByRole('link', { name: /Volver a proyectos/ }).click();
  await expect(page).toHaveURL(/#proyectos$/);
});

test('los enlaces externos abren GitHub de forma segura', async ({ page }) => {
  await page.goto('/');
  const gh = page.getByRole('link', { name: /GitHub/ }).first();
  await expect(gh).toHaveAttribute('href', /^https:\/\/github\.com\/lhuachl/);
  await expect(gh).toHaveAttribute('rel', /noopener/);
  await expect(gh).toHaveAttribute('target', '_blank');
});

test('una ruta inexistente muestra la página 404', async ({ page }) => {
  const response = await page.goto('/esta-ruta-no-existe');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('404');
});

test('con movimiento reducido no hay animaciones y el contenido sigue visible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  const animated = await page.evaluate(
    () => getComputedStyle(document.querySelector('.marquee-track')!).animationName,
  );
  expect(animated).toBe('none');
});

test('en móvil no hay scroll horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 700 });
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});
