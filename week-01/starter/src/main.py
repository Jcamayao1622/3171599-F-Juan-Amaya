# ============================================
# PROYECTO: API DE SALUDO
# ============================================
# Semana 01 - Bootcamp FastAPI Zero to Hero
#
# En este proyecto implementarás una API de saludos
# que demuestra el uso de:
# - FastAPI
# - Type hints
# - Path parameters
# - Query parameters
# - Documentación automática
# ============================================

from fastapi import FastAPI

# ============================================
# DATOS DE CONFIGURACIÓN
# ============================================

# Diccionario de saludos por idioma
GREETINGS: dict[str, str] = {
    "es": "¡Hola, {name}! Bienvenido a Agrotech🚜",
    "en": "Hello, {name}! Welcome to Agrotech 🚜",
    "fr": "Bonjour, {name}! Bienvenue à Agrotech 🚜",
    "de": "Hallo, {name}! Willkommen bei Agrotech 🚜",
    "it": "Ciao, {name}! Benvenuto in Agrotech 🚜",
    "pt": "Olá, {name}! Bem-vindo à Agrotech 🚜",
}

# Idiomas soportados (para documentación)
SUPPORTED_LANGUAGES = list(GREETINGS.keys())


# ============================================
# TODO 1: CREAR LA INSTANCIA DE FASTAPI
# ============================================

app = FastAPI(
    title="Agrotech API",
    description="API para plataforma de maquinaria agricola | Dominio 84",
    version="1.0.0",
)


# ============================================
# TODO 2: ENDPOINT RAÍZ
# ============================================

@app.get("/")
async def root() -> dict[str, str | list[str] | int]:
    """Información general de la API."""
    return {
        "domain_id": 84,
        "domain": "Plataforma de maquinaria agricola | Agrotech",
        "name": "Agrotech API",
        "version": "1.0.0",
        "docs": "/docs",
        "languages": SUPPORTED_LANGUAGES,
    }


# ============================================
# TODO 3: SALUDO PERSONALIZADO
# ============================================

@app.get("/agrotech/bienvenida/{name}")
async def bienvenida(
    name: str,
    language: str = "es",
) -> dict[str, str]:
    """
    Bienvenida personalizada a un cliente en la plataforma Agrotech.
    
    Args:
        name: Nombre del cliente
        language: Código de idioma (es, en, fr, de, it, pt)
    
    Returns:
        dict: Mensaje de bienvenida
    """
    template = GREETINGS.get(language, GREETINGS["es"])
    greeting = template.format(name=name)

    selected_language = language if language in GREETINGS else "es"

    return {
        "welcome_message": greeting,
        "language": selected_language,
        "client_name": name,
    }


# ============================================
# TODO 4: SALUDO FORMAL
# ============================================

@app.get("/agrotech/clientes/{name}/formal")
async def bienvenida_formal(
    name: str,
    title: str = "Sr./Sra.",
) -> dict[str, str]:
    """
    Bienvenida formal para clientes empresariales o agrícolas.
    
    Args:
        name: Nombre del cliente
        title: Título formal (Dr., Ing., Prof., Lic., etc.)
    
    Returns:
        dict: Mensaje formal
    """
    greeting = f"Estimado/a {title} {name}, bienvenido/a a Agrotech 🚜, plataforma de maquinaria agricola."

    return {
        "welcome_message": greeting,
        "title": title,
        "client_name": name,
    }


# ============================================
# TODO 5: SALUDO SEGÚN LA HORA
# ============================================

def get_day_period(hour: int) -> tuple[str, str]:
    """
    Determina el saludo y período según la hora.
    
    Args:
        hour: Hora del día (0-23)
    
    Returns:
        tuple: (saludo, período)
    """
    if 5 <= hour < 12:
        return ("Buenos días", "morning")
    elif 12 <= hour < 18:
        return ("Buenas tardes", "afternoon")
    else:
        return ("Buenas noches", "night")


@app.get("/agrotech/servicio/horario")
async def servicio_por_horario(
    hour: int,
) -> dict[str, str | int]:
    """
    Devuelve información del servicio según el horario.

    Args:
        hour: Hora del día (0-23)

    Returns:
        dict: Estado del servicio según hora
    """
    if hour < 0 or hour > 23:
        return {
            "error": "La hora debe estar entre 0 y 23",
            "hour": hour,
        }

    greeting_text, period = get_day_period(hour)

    if period == "morning":
        service_message = "Disponibilidad alta de maquinaria. Ideal para reservar tractores."
    elif period == "afternoon":
        service_message = "Soporte activo y reservas disponibles para cosechadoras."
    else:
        service_message = "Soporte limitado. Reservas disponibles para el siguiente día."

    return {
        "message": f"{greeting_text}. {service_message}",
        "hour": hour,
        "period": period,
    }


# ============================================
# TODO EXTRA: INFORMACIÓN DE ENTIDAD (MAQUINARIA CON NIVELES)
# ============================================

@app.get("/agrotech/maquinaria/{machine_id}")
async def obtener_maquinaria(
    machine_id: int,
    level: str = "basic",
) -> dict[str, str | int | float]:
    """
    Retorna información de maquinaria agrícola.
    
    Args:
        machine_id: ID de la maquinaria
        level: Nivel de detalle (basic o full)
    
    Returns:
        dict: Información de maquinaria según nivel
    """

    machine_basic = {
        "id": machine_id,
        "name": "Tractor John Deere 5050D",
        "category": "TRACTOR",
        "status": "AVAILABLE",
    }

    machine_full = {
        "id": machine_id,
        "name": "Tractor John Deere 5050D",
        "category": "TRACTOR",
        "status": "AVAILABLE",
        "daily_price": 250.0,
        "year": 2021,
        "horsepower": 50,
        "location": "Cundinamarca",
        "provider": "Agrotech Rentals",
    }

    if level == "full":
        return machine_full

    return machine_basic


# ============================================
# TODO 6: HEALTH CHECK
# ============================================

@app.get("/health")
async def health_check() -> dict[str, str]:
    """Verifica el estado de la API."""
    return {
        "status": "healthy",
        "service": "agrotech-api",
        "version": "1.0.0",
    }
