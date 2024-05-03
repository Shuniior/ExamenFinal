const productos = [
    { 
    Medida: "3x2", 
    Codigo: "A1", 
    Calibre: "18", 
    Imagen: "",
    Precio: 1460000,
    Categoria: "fijo pared" 
    },
    { 
    Medida: "4x3", 
    Codigo: "A2", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1850000,
    Categoria: "fijo pared"
    },
    { 
    Medida: "5x4", 
    Codigo: "A3", 
    Calibre: "18",
    Imagen: "",
    Precio: 2300000,
    Categoria: "fijo pared"
    },
    {
    Medida: "6x5",
    Codigo: "A4", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 2750000,
    Categoria: "fijo pared"
    },
    { 
    Medida: "7x6",
    Codigo: "A5", 
    Calibre: "18", 
    Imagen: "",
    Precio: 3200000, 
    Categoria: "fijo pared"
    },
    {
    Medida: "8x7",
    Codigo: "A6", 
    Calibre: "18",
    Imagen: "",
    Precio: 3650000, 
    Categoria: "fijo pared"
    },
    { 
    Medida: "9x8", 
    Codigo: "A7",
    Calibre: "18",
    Imagen: "", 
    Precio: 4100000, 
    Categoria: "fijo pared" 
    },
    { 
    Medida: "10x9",
    Codigo: "A8", 
    Calibre: "18",
    Imagen: "",
    Precio: 4550000,
    Categoria: "fijo pared" 
      },
    {  
    Medida: "2x2", 
    Codigo: "B1", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 760000, 
    Categoria: "fijo" 
    },
    {
     Medida: "2x3", 
     Codigo: "B2", 
     Calibre: "18", 
     Imagen: "", 
     Precio: 820000, 
     Categoria: "fijo" 
    },
    {
     Medida: "2x4", 
     Codigo: "B3", 
     Calibre: "18", 
     Imagen: "", 
     Precio: 880000, 
     Categoria: "fijo" 
    },
    {
     Medida: "2x5", 
     Codigo: "B4", 
     Calibre: "18", 
     Imagen: "", 
     Precio: 940000, 
     Categoria: "fijo" 
    },
    {
     Medida: "3x3", 
     Codigo: "B5", 
     Calibre: "18", 
     Imagen: "", 
     Precio: 980000, 
     Categoria: "fijo" 
    },
    { 
    Medida: "3x4", 
    Codigo: "B6", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1040000, 
    Categoria: "fijo" 
    },
    { 
    Medida: "3x5", 
    Codigo: "B7", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1100000, 
    Categoria: "fijo" 
    },
    {
    Medida: "4x4", 
    Codigo: "B8", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1160000, 
    Categoria: "fijo" 
    },
    {
     Medida: "4x5", 
     Codigo: "B9", 
     Calibre: "18", 
     Imagen: "", 
     Precio: 1220000, 
     Categoria: "fijo"
    },
    { 
    Medida: "5x5", 
    Codigo: "B10", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1280000, 
    Categoria: "fijo" 
    },
    { 
    Medida: "5x6", 
    Codigo: "B11", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1340000, 
    Categoria: "fijo" 
    },
    { 
    Medida: "6x6",
    Codigo: "B12", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1400000, 
    Categoria: "fijo" 
    },
    { 
    Medida: "6x7", 
    Codigo: "B13", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1460000, 
    Categoria: "fijo"
    },
    { 
    Medida: "6x8", 
    Codigo: "B14", 
    Calibre: "18", 
    Imagen: "", 
    Precio: 1520000, 
    Categoria: "fijo" 
    },
    {
      Medida: "3x2", 
      Codigo: "C1", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 850000, 
      Categoria: "plegable" 
    },
    { 
      Medida: "3x3", 
      Codigo: "C2", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 910000, 
      Categoria: "plegable" 
    },
    { 
      Medida: "3x4", 
      Codigo: "C3", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 100000, 
      Categoria: "plegable" 
    },
    { 
      Medida: "3x5", 
      Codigo: "C4", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 1230000, 
      Categoria: "plegable" 
    },
    { 
      Medida: "4x4", 
      Codigo: "C5", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 1390000, 
      Categoria: "plegable" 
    },
    { 
      Medida: "4x5", 
      Codigo: "C6", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 1550000, 
      Categoria: "plegable" 
    },
    { 
      Medida: "4x6", 
      Codigo: "C7", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 2210000, 
      Categoria: "plegable" 
    }, 
    { 
      Medida: "2x2", 
      Codigo: "D1", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 790000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "2x3", 
      Codigo: "D2", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 810000,
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "2x4", 
      Codigo: "D3", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 830000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "2x5", 
      Codigo: "D4", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 850000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "3x3", 
      Codigo: "D5", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 870000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "3x4", 
      Codigo: "D6", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 890000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "3x5", 
      Codigo: "D7", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 910000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "4x4", 
      Codigo: "D8", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 930000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "4x5", 
      Codigo: "D9", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 950000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "5x5", 
      Codigo: "D10", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 970000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "5x6", 
      Codigo: "D11", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 990000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "6x6", 
      Codigo: "D12", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 1010000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "6x7", 
      Codigo: "D13", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 1030000, 
      Categoria: "SOMBRILLA" 
    },
    { 
      Medida: "6x8", 
      Codigo: "D14", 
      Calibre: "18", 
      Imagen: "", 
      Precio: 1050000, 
      Categoria: "SOMBRILLA" 
    },
    {
      Medida:"2x2",
      Codigo:"E1",
      Imagen:"",
      Precio:200000,
      Categoria:"carpa",
      Material:"nailon"

    },
    {
      Medida:"4X4",
      Codigo:"E2",
      Imagen:"",
      Precio:290000,
      Categoria:"carpa",
      Material:"nailon"

    },
    {
      Medida:"5X5",
      Codigo:"E3",
      Imagen:"",
      Precio:300000,
      Categoria:"carpa",
      Material:"nailon"

    },
    {
      Medida:"7X7",
      Codigo:"E4",
      Imagen:"",
      Precio:350000,
      Categoria:"carpa",
      Material:"nailon"

    },
    {
      Medida:"10X10",
      Codigo:"E5",
      Imagen:"",
      Precio:800000,
      Categoria:"carpa",
      Material:"nailon"

    },
    {
      Medida: "10 m^2", 
      Codigo: "F1", 
      Material: "Cemento", 
      Imagen: "", 
      Precio:9500000, 
      Categoria: "Membrana" 
    },
    {
      Medida: "20 m^2", 
      Codigo: "F2", 
      Material: "Cemento", 
      Imagen: "", 
      Precio:25000000, 
      Categoria: "Membrana" 
    }


  
  ];