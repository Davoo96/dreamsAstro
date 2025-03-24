import { test } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  await page.getByRole("link", { name: "Entre em contato" }).click();
  await page.getByPlaceholder("Nome").click();
  await page.getByPlaceholder("Nome").fill("Teste");
  await page.getByPlaceholder("Nome").press("Tab");
  await page.getByPlaceholder("Email").fill("Oiii");
  await page.getByPlaceholder("Email").press("Tab");
  await page.getByPlaceholder("Telefone").fill("12312312321");
  await page.getByPlaceholder("Mensagem").click();
  await page.getByPlaceholder("Mensagem").fill("Mensagem Legal!");
  await page.getByRole("link", { name: "Quem Somos" }).click();
  await page.getByRole("link", { name: "Projetos" }).click();
  await page.getByRole("link", { name: "Contato", exact: true }).click();
});
