export {};

const formData = [
  "Categoria",
  "Ubicacion",
  "Descripción",
  "Detalles",
  { tipoVendedor: { email: null, nombre: null, telefono: null } },
  {
    informacionAdicional: {
      compania: null,
      direccion: null,
      ciudad: null,
      telefonoEmpresa: null,
      paginaWeb: null,
      isChat: null,
    },
  },
  "Plan Resaltador",
];

const propertyData = [
  "Titulo",
  "Recamaras",
  "Baños",
  "Estacionamiento",
  "Metros cuadrados",
  { tipoVendedor: ["Propietario", "Agente", "Constructora", "Promotora"] },
];

const jobData = [
  "Puesto",
  "Descripcion",
  {
    rubro: {
      clasificacion: [
        "Administración/Secretariado",
        "Banca/Finanzas/Seguros",
        "Ventas/Comercial",
        "Legales",
        "Diseno Gráfico",
        "Contabilidad",
        "Educación",
        "Telemarketing",
        "Atención al cliente",
        "Estética/Belleza",
        "Turismo/Gastronomía",
        "Informática/ Telecomunicación",
        "Ingeniería",
        "Técnicos",
        "Logística/Compras",
        "Marketing/Relaciones Públicas",
        "Mecánica/Reparación/Mantenimiento",
        "Medicina/Salud",
        "Medios de Comunicación/Publicidad",
        "Inmobiliario/Construcción",
        "Operarios/Almacén/Oficios",
        "Recursos Humanos",
        "Seguridad/Vigilancia",
        "Agricultura/Veterinaria",
        "Empleada Doméstica",
        "Comercio Exterior/Traducción",
        "Calidad/Producción",
      ],
    },
  },
  "Localización",
  "Salario estimado",
  { duracion: ["Tiempo Completo", "Tiempo Parcial", "Temporal", "Proyecto"] },
  "Requerimiento Académico",
  {
    experiencia: [
      "No se requiere experiencia",
      "1 Año de Experiencia",
      "2-3 Años de Experiencia",
      "4-5 Años de Experiencia",
      "5-10 Años de Experiencia",
    ],
  },
  "Habilidades",
  "Funciones",
];

const redDiamond = [
  "Genera más confianza al comprador",
  "Resaltado en Desktop, Apps y Móvil",
  "Renueva la fecha de publicación",
  "Posicionado tras anuncios Platino",
  "Rota en la portada horizontal",
  "Resaltador el más comprado",
];

const carData = [
  "Titulo",
  "Descripción",
  "Precio",
  "Año",
  "Kilometros",
  "Combustible",
  "Transmisión",
  "Tipo de vendedor",
  "Imagenes",
  "Youtube Link",
];

const phoneData = ["Titulo", "Descripcion", "Precio", "Condicion"];

const petData = ["Titulo", "Raza", "Sexo", "Precio"];

const nissan = {
  name: "Nissan",
  model: [
    "100NX",
    "110",
    "1400",
    "200 SX Silvia",
    "200SX",
    "211",
    "240C",
    "240SX",
    "260ZX",
    "270R",
    "300ZX",
    "350Z",
    "370Z",
    "400R",
    "AA-X",
    "Almera",
    "Altima",
    "Altima Hybrid",
    "Armada",
    "Avenir",
    "Axxess",
    "AXY",
    "AZ-1",
    "Bluebird",
    "C 52",
    "Cedrid",
    "Cefiro",
    "Chappo",
    "Cherry",
    "Cima",
    "Commercial",
    "CQ-X",
    "Crew",
    "Cube",
    "DS-2",
    "E20",
    "El Grand",
    "Fairlady",
    "Frontier",
    "Fusion",
    "Gloria",
    "Grand Livina",
    "GT-R",
    "Hardbody",
    "HyperMini",
    "Ideo",
    "Interstar",
    "Juke",
    "Kicks",
    "Lafesta",
    "Laurel",
    "Leaf",
    "Leopard",
    "Livina",
    "M",
    "March",
    "Maxima",
    "Micra",
    "Micra",
    "Mid4",
    "MM",
    "Moco",
    "Murano",
    "Navarra",
    "Note",
    "NP300",
    "NV",
    "NV Cargo",
    "NV Passanger",
    "NV200",
    "NX",
    "PathFinder",
    "Patrol",
    "Pickup",
    "Pintara",
    "Pixo",
    "Platina",
    "Prarie",
    "Presea",
    "President",
    "Primera",
    "Pulsar",
    "Qashqal",
    "Quest",
    "R390 GT1",
    "R391",
    "Rasheen",
    "Rogue",
    "Rogue Select",
    "Rogue Sport",
    "Santana",
    "Sedan",
    "Sentra",
    "Serena",
    "Silvia",
    "Skyline",
    "Sport",
    "Stagea",
    "Stanza",
    "Sunny",
    "SUT",
    "Terrano",
    "Terrano II",
    "Tilda",
    "Titan",
    "Titan XD",
    "Trailrunner",
    "Truck",
    "Urvan",
    "Van",
    "Vanette",
    "Versa",
    "Versa Note",
    "Violet",
    "X-Trail",
    "Xterra",
    "XVL",
    "Z",
    "Zaroot",
    "Other",
  ],
};
