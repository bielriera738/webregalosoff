# Guía de Configuración de Amazon API

Para que la tienda muestre productos reales y precios actualizados, necesitas conectar la API de Amazon Product Advertising (PA-API).

## 1. Requisitos Previos
Debes tener una cuenta de **Amazon Afiliados** activa y aprobada.
- Regístrate en: [https://afiliados.amazon.es/](https://afiliados.amazon.es/)

## 2. Obtener las Claves (API Keys)
1. Inicia sesión en tu cuenta de Amazon Afiliados.
2. Ve al menú **Herramientas** > **Product Advertising API**.
3. Haz clic en **"Añadir credenciales"**.
4. Copia tu **Access Key** y tu **Secret Key**.
   > ⚠️ **IMPORTANTE**: La Secret Key solo se muestra una vez. Guárdala bien o descarga el archivo .csv.

## 3. Configurar el Proyecto
1. En la raíz del proyecto, crea un archivo llamado `.env` (puedes copiar `.env.example`).
2. Rellena los datos con tus claves:

\`\`\`env
AMAZON_ACCESS_KEY=Tu_Access_Key_Aqui
AMAZON_SECRET_KEY=Tu_Secret_Key_Aqui
AMAZON_TAG=tu-tag-de-afiliado-21
AMAZON_REGION=eu-west-1
\`\`\`

- **AMAZON_TAG**: Es tu ID de asociado (ej. `mitienda-21`).
- **AMAZON_REGION**: Para España es `eu-west-1`.

## 4. Reiniciar
Una vez guardado el archivo `.env`, reinicia el servidor de desarrollo (`npm run dev`) para que cargue las nuevas variables.
