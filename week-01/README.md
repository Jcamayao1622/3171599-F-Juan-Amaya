# 🎯 Proyecto Semana 01: API Básica de tu Dominio

## 🏛️ Tu Dominio Asignado

**Dominio:** `84 | Plataforma de maquinaria agrícola | Agrotech`

> ⚠️ **IMPORTANTE:** Cada aprendiz trabaja sobre un dominio diferente.
> Este proyecto fue adaptado completamente al dominio asignado: **Agrotech**.

### 💡 Adaptación del Dominio

| Concepto | Adaptación Agrotech |
|----------|----------------------|
| Main Entity | `Machine` (Maquinaria agrícola) |
| Welcome Endpoint | `GET /farmer/{name}` |
| Info Endpoint | `GET /machine/{identifier}/info` |
| Service Endpoint | `GET /service/schedule` |

---

## 📋 Descripción

En este proyecto integrador se desarrolló una **API básica** utilizando **FastAPI**, adaptada al dominio **Agrotech**, una plataforma orientada a la consulta y gestión de maquinaria agrícola disponible para alquiler o uso en operaciones agrícolas.

Se aplican los conceptos aprendidos en la semana:

- Configuración de Docker
- Type hints en Python
- Programación asíncrona
- Endpoints FastAPI con parámetros

---

## 🎯 Objetivos

Al completar este proyecto, se demuestra la capacidad de:

- ✅ Configurar un proyecto FastAPI con Docker
- ✅ Usar type hints correctamente
- ✅ Crear endpoints con path y query parameters
- ✅ Adaptar conceptos genéricos a un dominio real
- ✅ Documentar la API con Swagger

---

## 📦 Requisitos Funcionales

---

### RF-01: API Information Endpoint

- **Ruta:** `GET /`
- **Descripción:** Retorna información general de la API adaptada al dominio
- **Respuesta esperada:**

```json
{
  "name": "Agrotech Machinery API",
  "version": "1.0.0",
  "domain": "agrotech"
}
