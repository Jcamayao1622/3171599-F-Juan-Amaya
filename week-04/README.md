# 🚜 Week 4 - Plataforma de Maquinaria Agrícola (Agrotech)

## 📌 Descripción del Proyecto

Este proyecto corresponde a la Semana 4 y consiste en el desarrollo de un catálogo interactivo utilizando React y TypeScript.

El dominio asignado es una **Plataforma de Maquinaria Agrícola (Agrotech)**, donde se visualiza un listado de maquinaria disponible con funcionalidades de búsqueda, filtrado y ordenamiento.

---

## 🏗️ Entidad Principal

**Maquinaria**

Propiedades utilizadas:

- id
- nombre
- categoria
- precio
- disponible

---

## ✅ Funcionalidades Implementadas

- Renderizado de lista utilizando `.map()` con keys únicas
- Renderizado condicional de disponibilidad (Disponible / No disponible)
- Búsqueda en tiempo real (case insensitive)
- Filtro por categoría
- Ordenamiento por precio (ascendente y descendente)
- Contador de resultados
- Estado vacío cuando no hay coincidencias
- Tipado completo con TypeScript (sin uso de `any`)

---

## 🛠️ Tecnologías Utilizadas

- React
- TypeScript
- Vite

---

## 🚀 Instrucciones de Ejecución

1. Clonar el repositorio
2. Ingresar a la carpeta:

   cd week-04

3. Instalar dependencias:

   npm install

4. Ejecutar el proyecto:

   npm run dev

5. Abrir el navegador en:

   http://localhost:5173

---

## 📂 Estructura del Proyecto

week-04/
│── public/
│── src/
│── package.json
│── vite.config.ts
│── tsconfig.json
│── README.md

---

## 🎯 Objetivo Académico

Aplicar conceptos de:

- Renderizado condicional
- Manejo de estados
- Listas con keys
- Filtrado y ordenamiento
- Búsqueda dinámica
- Tipado con TypeScript