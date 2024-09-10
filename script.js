// Función para mostrar el módulo correcto
function showModule(moduleId) {
  document.querySelectorAll('.module').forEach(module => {
    module.style.display = 'none';
  });
  document.getElementById(moduleId).style.display = 'block';
}


// Limpia el localStorage antes de iniciar
function loadFromLocalStorage() {
  const storedProducts = localStorage.getItem('selectedProducts');
  const storedCost = localStorage.getItem('totalCost');
  
  // Limpiar si es necesario y luego sigue con la carga
  if (!storedProducts || !storedCost) {
    localStorage.clear(); // Limpiar almacenamiento si no hay datos guardados
  } else {
    selectedProducts = JSON.parse(storedProducts);
    totalCost = parseFloat(storedCost);
  }

  updateSelectedProducts();
}

const productos = {
  respiratorio: {
    fase1: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 },  precioPorKilo: 150080, concentracion: 60, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'],},
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, concentracion: 20, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'CLORDIAGRO', dosis: { status1: 2.0, status2: 2.5, status3: 3.0 }, precioPorKilo: 17000, concentracion: 20, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp***','Salmonela spp**', 'Glaeserella*', 'Klepsiella spp***','Bordetella spp**', 'Enterobacter**', 'Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp*','TIEMPO DE RETIRO 15 DIAS'] },
      { nombre: 'DINAMIX 200', dosis: { status1: 0.5, status2: 0.75, status3: 1.0 }, precioPorKilo: 52000, concentracion: 20, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*', 'TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 800', dosis: { status1: 0.125, status2: 0.2, status3: 0.25 }, precioPorKilo: 147500, concentracion: 80, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, concentracion: 8.8, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, concentracion: 20, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'LINCOX', dosis: { status1: 5.5, status2: 6.0, status3: 7.0 }, precioPorKilo: 80000, concentracion: 4.4, bacterias: ['M hyopneumoniae***','E. coli*', 'Salmonela spp*', 'Glaeserella**', 'Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**','TIEMPO DE RETIRO 8 DIAS'] },
      { nombre: 'TILCOMIX', dosis: { status1: 0.5, status2: 0.750, status3: 1.0 }, precioPorKilo: 147000, concentracion: 40, bacterias: ['M hyopneumoniae**','E. coli**', 'Pasteurella spp***','Actinobacillus P***','TIEMPO DE RETIRO 7 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, concentracion: 25, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, concentracion: 75, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, concentracion: 90, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, concentracion: 50, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] }
        
    ],
    fase2: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 },  precioPorKilo: 150080, concentracion: 60, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'],},
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, concentracion: 20, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'CLORDIAGRO', dosis: { status1: 2.0, status2: 2.5, status3: 3.0 }, precioPorKilo: 17000, concentracion: 20, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp***','Salmonela spp**', 'Glaeserella*', 'Klepsiella spp***','Bordetella spp**', 'Enterobacter**', 'Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp*','TIEMPO DE RETIRO 15 DIAS'] },
      { nombre: 'DINAMIX 200', dosis: { status1: 0.5, status2: 0.75, status3: 1.0 }, precioPorKilo: 52000, concentracion: 20, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*', 'TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 800', dosis: { status1: 0.125, status2: 0.2, status3: 0.25 }, precioPorKilo: 147500, concentracion: 80, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, concentracion: 8.8, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, concentracion: 20, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'LINCOX', dosis: { status1: 5.5, status2: 6.0, status3: 7.0 }, precioPorKilo: 80000, concentracion: 4.4, bacterias: ['M hyopneumoniae***','E. coli*', 'Salmonela spp*', 'Glaeserella**', 'Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**','TIEMPO DE RETIRO 8 DIAS'] },
      { nombre: 'TILCOMIX', dosis: { status1: 0.5, status2: 0.750, status3: 1.0 }, precioPorKilo: 147000, concentracion: 40, bacterias: ['M hyopneumoniae**','E. coli**', 'Pasteurella spp***','Actinobacillus P***','TIEMPO DE RETIRO 7 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, concentracion: 25, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, concentracion: 75, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, concentracion: 90, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, concentracion: 50, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] }
       
    ],
    fase3: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 },  precioPorKilo: 150080, concentracion: 60, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'],},
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, concentracion: 20, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'CLORDIAGRO', dosis: { status1: 2.0, status2: 2.5, status3: 3.0 }, precioPorKilo: 17000, concentracion: 20, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp***','Salmonela spp**', 'Glaeserella*', 'Klepsiella spp***','Bordetella spp**', 'Enterobacter**', 'Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp*','TIEMPO DE RETIRO 15 DIAS'] },
      { nombre: 'DINAMIX 200', dosis: { status1: 0.5, status2: 0.75, status3: 1.0 }, precioPorKilo: 52000, concentracion: 20, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*', 'TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 800', dosis: { status1: 0.125, status2: 0.2, status3: 0.25 }, precioPorKilo: 147500, concentracion: 80, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, concentracion: 8.8, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, concentracion: 20, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'LINCOX', dosis: { status1: 5.5, status2: 6.0, status3: 7.0 }, precioPorKilo: 80000, concentracion: 4.4, bacterias: ['M hyopneumoniae***','E. coli*', 'Salmonela spp*', 'Glaeserella**', 'Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**','TIEMPO DE RETIRO 8 DIAS'] },
      { nombre: 'TILCOMIX', dosis: { status1: 0.5, status2: 0.750, status3: 1.0 }, precioPorKilo: 147000, concentracion: 40, bacterias: ['M hyopneumoniae**','E. coli**', 'Pasteurella spp***','Actinobacillus P***','TIEMPO DE RETIRO 7 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, concentracion: 25, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, concentracion: 75, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, concentracion: 90, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, concentracion: 50, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] }
      
    ],
    iniciador: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 },  precioPorKilo: 150080, concentracion: 60, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'],},
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, concentracion: 20, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'CLORDIAGRO', dosis: { status1: 2.0, status2: 2.5, status3: 3.0 }, precioPorKilo: 17000, concentracion: 20, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp***','Salmonela spp**', 'Glaeserella*', 'Klepsiella spp***','Bordetella spp**', 'Enterobacter**', 'Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp*','TIEMPO DE RETIRO 15 DIAS'] },
      { nombre: 'DINAMIX 200', dosis: { status1: 0.5, status2: 0.75, status3: 1.0 }, precioPorKilo: 52000, concentracion: 20, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*', 'TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 800', dosis: { status1: 0.125, status2: 0.2, status3: 0.25 }, precioPorKilo: 147500, concentracion: 80, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, concentracion: 8.8, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, concentracion: 20, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'LINCOX', dosis: { status1: 5.5, status2: 6.0, status3: 7.0 }, precioPorKilo: 80000, concentracion: 4.4, bacterias: ['M hyopneumoniae***','E. coli*', 'Salmonela spp*', 'Glaeserella**', 'Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**','TIEMPO DE RETIRO 8 DIAS'] },
      { nombre: 'TILCOMIX', dosis: { status1: 0.5, status2: 0.750, status3: 1.0 }, precioPorKilo: 147000, concentracion: 40, bacterias: ['M hyopneumoniae**','E. coli**', 'Pasteurella spp***','Actinobacillus P***','TIEMPO DE RETIRO 7 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, concentracion: 25, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, concentracion: 75, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, concentracion: 90, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, concentracion: 50, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] },
      { nombre: 'DQCICLIN', dosis: { status1: 0.8, status2: 1.0, status3: 1.2 }, precioPorKilo: 277000, concentracion: 50, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Actinobacillus p*', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium**','Erisipelotrix**', 'Listeria m**','TIEMPO DE RETIRO 9 DIAS'] }
    
   ],
    levante: [
      { nombre: 'TILVALOSINA', dosis: { status1: 0.3, status2: 0.35, status3: 0.4 }, precioPorKilo: 210000, concentracion: 20, bacterias: ['M hyopneumoniae**','E. coli**', 'Pasteurella spp***','Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, concentracion: 20, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'CLORDIAGRO', dosis: { status1: 2.0, status2: 2.5, status3: 3.0 }, precioPorKilo: 17000, concentracion: 20, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp***','Salmonela spp**', 'Glaeserella*', 'Klepsiella spp***','Bordetella spp**', 'Enterobacter**', 'Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp*','TIEMPO DE RETIRO 15 DIAS'] },
      { nombre: 'DINAMIX 200', dosis: { status1: 0.5, status2: 0.75, status3: 1.0 }, precioPorKilo: 52000, concentracion: 20, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*', 'TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 800', dosis: { status1: 0.125, status2: 0.2, status3: 0.25 }, precioPorKilo: 147500, concentracion: 80, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, concentracion: 8.8, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, concentracion: 20, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
    
    ],
    engorde: [
      { nombre: 'TILVALOSINA', dosis: { status1: 0.3, status2: 0.35, status3: 0.4 }, precioPorKilo: 210000, bacterias: ['M hyopneumoniae**','E. coli**', 'Pasteurella spp***','Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 200', dosis: { status1: 0.5, status2: 0.75, status3: 1.0 }, precioPorKilo: 52000, concentracion: 20, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*', 'TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 800', dosis: { status1: 0.125, status2: 0.2, status3: 0.25 }, precioPorKilo: 147500, concentracion: 80, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, concentracion: 20, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
    
   ],
    finalizador: [
      { nombre: 'TILVALOSINA', dosis: { status1: 0.2, status2: 0.3, status3: 0.4 }, precioPorKilo: 210000, concentracion: 20, bacterias: ['Bacteria E', 'Bacteria F'] },
      { nombre: 'DINAMIX 200', dosis: { status1: 0.5, status2: 0.75, status3: 1.0 }, precioPorKilo: 52000, concentracion: 20, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*', 'TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'DINAMIX 800', dosis: { status1: 0.125, status2: 0.2, status3: 0.25 }, precioPorKilo: 147500, concentracion: 80, bacterias: ['M hyopneumoniae***', 'Actinobacillus p*', 'Brachyspira spp**','Lawsonia**','Estafilococcus spp*','Estreptococcus*','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, concentracion: 20, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
   
    ]
  },
  digestivo: {
    fase1: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 }, precioPorKilo: 150080, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'FRACTAL', dosis: { status1: 1.0, status2: 1.5, status3: 2.0 }, precioPorKilo: 38800, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA' ] },
      { nombre: 'EXOLUTION', dosis: { status1: 0.5, status2: 0.8, status3: 1.0 }, precioPorKilo: 36300, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA, EFECTO RESIDUAL VS Salmonella' ] },
      { nombre: 'CELMANAX', dosis: { status1: 1.5, status2: 1.8, status3: 2.0 }, precioPorKilo: 17500, bacterias: ['E. coli','Salmonela spp','Clostridium','MEJORADOR DE LA EFICIENCIA ALIMENTICIA'] },
      { nombre: 'HALQUINOX 500', dosis: { status1: 0.7, status2: 0.1, status3: .120 }, precioPorKilo: 70400, concentracion: 50, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **',] },
      { nombre: 'HALQUINOX 800', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 94700, concentracion: 80, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **'] },
      { nombre: 'DMB', dosis: { status1: 0.3, status2: 0.4, status3: 0.5 }, precioPorKilo: 18500, concentracion: 11, bacterias: ['Brachyspira spp***', 'Clostridium ***','Estafilococcus spp***','Estreptococcus***','Corynobactereium spp*', 'NO TIENE TIEMPO DE RETIRO' ] },
      { nombre: 'SAGAH', dosis: { status1: 0.62, status2: 0.1, status3: 0.250 }, precioPorKilo: 38800, concentracion: 8, bacterias: ['Clostridium **','Estafilococcus spp***','Estreptococcus***', 'NO TIENE TIEMPO DE RETIRO'] }
   
    ],
    fase2: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 }, precioPorKilo: 150080, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'FRACTAL', dosis: { status1: 1.0, status2: 1.5, status3: 2.0 }, precioPorKilo: 38800, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA' ] },
      { nombre: 'EXOLUTION', dosis: { status1: 0.5, status2: 0.8, status3: 1.0 }, precioPorKilo: 36300, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA, EFECTO RESIDUAL VS Salmonella' ] },
      { nombre: 'CELMANAX', dosis: { status1: 1.5, status2: 1.8, status3: 2.0 }, precioPorKilo: 17500, bacterias: ['E. coli','Salmonela spp','Clostridium','MEJORADOR DE LA EFICIENCIA ALIMENTICIA'] },
      { nombre: 'HALQUINOX 500', dosis: { status1: 0.7, status2: 0.1, status3: .120 }, precioPorKilo: 70400, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **',] },
      { nombre: 'HALQUINOX 800', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 94700, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **'] },
      { nombre: 'DMB', dosis: { status1: 0.3, status2: 0.4, status3: 0.5 }, precioPorKilo: 18500, bacterias: ['Brachyspira spp***', 'Clostridium ***','Estafilococcus spp***','Estreptococcus***','Corynobactereium spp*', 'NO TIENE TIEMPO DE RETIRO' ] },
      { nombre: 'SAGAH', dosis: { status1: 0.62, status2: 0.1, status3: 0.250 }, precioPorKilo: 38800, bacterias: ['Clostridium **','Estafilococcus spp***','Estreptococcus***', 'NO TIENE TIEMPO DE RETIRO'] }
   
    ],
    fase3: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 }, precioPorKilo: 150080, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'FRACTAL', dosis: { status1: 1.0, status2: 1.5, status3: 2.0 }, precioPorKilo: 38800, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA' ] },
      { nombre: 'EXOLUTION', dosis: { status1: 0.5, status2: 0.8, status3: 1.0 }, precioPorKilo: 36300, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA, EFECTO RESIDUAL VS Salmonella' ] },
      { nombre: 'CELMANAX', dosis: { status1: 1.5, status2: 1.8, status3: 2.0 }, precioPorKilo: 17500, bacterias: ['E. coli','Salmonela spp','Clostridium','MEJORADOR DE LA EFICIENCIA ALIMENTICIA'] },
      { nombre: 'HALQUINOX 500', dosis: { status1: 0.7, status2: 0.1, status3: .120 }, precioPorKilo: 70400, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **',] },
      { nombre: 'HALQUINOX 800', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 94700, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **'] },
      { nombre: 'DMB', dosis: { status1: 0.3, status2: 0.4, status3: 0.5 }, precioPorKilo: 18500, bacterias: ['Brachyspira spp***', 'Clostridium ***','Estafilococcus spp***','Estreptococcus***','Corynobactereium spp*', 'NO TIENE TIEMPO DE RETIRO' ] },
      { nombre: 'SAGAH', dosis: { status1: 0.62, status2: 0.1, status3: 0.250 }, precioPorKilo: 38800, bacterias: ['Clostridium **','Estafilococcus spp***','Estreptococcus***', 'NO TIENE TIEMPO DE RETIRO'] }
     ],
    iniciador: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 }, precioPorKilo: 150080, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'FRACTAL', dosis: { status1: 1.0, status2: 1.5, status3: 2.0 }, precioPorKilo: 38800, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA' ] },
      { nombre: 'EXOLUTION', dosis: { status1: 0.5, status2: 0.8, status3: 1.0 }, precioPorKilo: 36300, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA, EFECTO RESIDUAL VS Salmonella' ] },
      { nombre: 'CELMANAX', dosis: { status1: 1.5, status2: 1.8, status3: 2.0 }, precioPorKilo: 17500, bacterias: ['E. coli','Salmonela spp','Clostridium','MEJORADOR DE LA EFICIENCIA ALIMENTICIA'] },
      { nombre: 'HALQUINOX 500', dosis: { status1: 0.7, status2: 0.1, status3: .120 }, precioPorKilo: 70400, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **',] },
      { nombre: 'HALQUINOX 800', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 94700, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **'] },
      { nombre: 'DMB', dosis: { status1: 0.3, status2: 0.4, status3: 0.5 }, precioPorKilo: 18500, bacterias: ['Brachyspira spp***', 'Clostridium ***','Estafilococcus spp***','Estreptococcus***','Corynobactereium spp*', 'NO TIENE TIEMPO DE RETIRO' ] },
      { nombre: 'SAGAH', dosis: { status1: 0.62, status2: 0.1, status3: 0.250 }, precioPorKilo: 38800, bacterias: ['Clostridium **','Estafilococcus spp***','Estreptococcus***', 'NO TIENE TIEMPO DE RETIRO'] }
      ],
    levante: [
      { nombre: 'AMOXIN 600', dosis: { status1: 0.4, status2: 0.5, status3: 0.6 }, precioPorKilo: 150080, bacterias: ['E. coli**', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella***', 'Actinobacillus p*', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp**', 'Clostridium **', 'Erisipelotrix**', 'Listeria m**', 'Tiempo de retiro 20 días'] },
      { nombre: 'ESPELIN', dosis: { status1: 1.7, status2: 2.0, status3: 3.0 }, precioPorKilo: 46000, bacterias: ['M hyopneumoniae***','E. coli***', 'Pasteurella spp**','Salmonela spp*', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp*', 'Actinobacillus p***','Brachyspira spp***', 'Lawsonia***','Bordetella spp***', 'Enterobacter**', 'Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','TIEMPO DE RETIRO 21 DIAS'] },
      { nombre: 'TILOMIX 250', dosis: { status1: 1.0, status2: 1.3, status3: 1.6 }, precioPorKilo: 51000, bacterias: ['M hyopneumoniae*', 'E. coli**', 'Brachyspira spp***','Lawsonia***','Estafilococcus spp***','Estreptococcus***', 'Clostridium**','Erisipelotrix','TIEMPO DE RETIRO 14 DIAS'] },
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'FOSMICYNA 90', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 395000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Glaeserella***', 'Klebsiella spp***', 'Estafilococcus spp***', 'Streptococcus spp***', 'Clostridium*', 'TIEMPO DE RETIRO DE 7 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] },
      { nombre: 'TRIMBAC', dosis: { status1: 0.55, status2: 0.7, status3: 0.85 }, precioPorKilo: 158000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp*', 'Glaeserella***', 'Klepsiella spp***','Actonobacillus P**', 'Brachyspira spp', 'Leptospira spp**','Bordetella spp***','Enterobacter spp**','Estafilococcus spp**','Estreptococcus**', 'Corynebacterium spp**','Listeria m**','TIEMPO DE RETIRO 7 DIAS'] },  
      { nombre: 'CIPROFLOX', dosis: { status1: 1.0, status2: 1.25, status3: 1.5 }, precioPorKilo: 55700, bacterias: ['M hyopneumoniae*','E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella***', 'Klepsiella spp***', 'Actinobacillus p**', 'Bordetella spp***','Enterobacter***','Estafilococcus spp***','Estreptococcus***', 'Corynebacterium spp***', 'Clostridium ***','Erisipelotrix***', 'Listeria m*','Tiempo de retiro 10 dias'] },
      { nombre: 'FRACTAL', dosis: { status1: 1.0, status2: 1.5, status3: 2.0 }, precioPorKilo: 38800, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA' ] },
      { nombre: 'EXOLUTION', dosis: { status1: 0.5, status2: 0.8, status3: 1.0 }, precioPorKilo: 36300, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA, EFECTO RESIDUAL VS Salmonella' ] },
      { nombre: 'CELMANAX', dosis: { status1: 1.5, status2: 1.8, status3: 2.0 }, precioPorKilo: 17500, bacterias: ['E. coli','Salmonela spp','Clostridium','MEJORADOR DE LA EFICIENCIA ALIMENTICIA'] },
      { nombre: 'HALQUINOX 500', dosis: { status1: 0.7, status2: 0.1, status3: .120 }, precioPorKilo: 70400, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **',] },
      { nombre: 'HALQUINOX 800', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 94700, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **'] },
      { nombre: 'DMB', dosis: { status1: 0.3, status2: 0.4, status3: 0.5 }, precioPorKilo: 18500, bacterias: ['Brachyspira spp***', 'Clostridium ***','Estafilococcus spp***','Estreptococcus***','Corynobactereium spp*', 'NO TIENE TIEMPO DE RETIRO' ] },
      { nombre: 'SAGAH', dosis: { status1: 0.62, status2: 0.1, status3: 0.250 }, precioPorKilo: 38800, bacterias: ['Clostridium **','Estafilococcus spp***','Estreptococcus***', 'NO TIENE TIEMPO DE RETIRO'] }
     ],
    engorde: [
      { nombre: 'FENIFLOR', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 90000, bacterias: ['E. coli***', 'Pasteurella spp***','Salmonela spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter*', 'Actinobacillus P***','TIEMPO DE RETIRO 5 DIAS'] },
      { nombre: 'NEOCYN', dosis: { status1: 0.25, status2: 0.3, status3: 0.4 }, precioPorKilo: 70000, bacterias: ['E. coli***', 'Pastereulla spp***','Salmonela spp***', 'Pseudomonas spp***', 'Glaeserella*', 'Klepsiella spp***', 'Enterobacter***', 'Listeria m*','TIEMPO DE RETIRO 3 DIAS'] },
      { nombre: 'FRACTAL', dosis: { status1: 1.0, status2: 1.5, status3: 2.0 }, precioPorKilo: 38800, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA' ] },
      { nombre: 'EXOLUTION', dosis: { status1: 0.5, status2: 0.8, status3: 1.0 }, precioPorKilo: 36300, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA, EFECTO RESIDUAL VS Salmonella' ] },
      { nombre: 'CELMANAX', dosis: { status1: 1.5, status2: 1.8, status3: 2.0 }, precioPorKilo: 17500, bacterias: ['E. coli','Salmonela spp','Clostridium','MEJORADOR DE LA EFICIENCIA ALIMENTICIA'] },
      { nombre: 'HALQUINOX 500', dosis: { status1: 0.7, status2: 0.1, status3: .120 }, precioPorKilo: 70400, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **',] },
      { nombre: 'HALQUINOX 800', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 94700, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **'] },
      { nombre: 'DMB', dosis: { status1: 0.3, status2: 0.4, status3: 0.5 }, precioPorKilo: 18500, bacterias: ['Brachyspira spp***', 'Clostridium ***','Estafilococcus spp***','Estreptococcus***','Corynobactereium spp*', 'NO TIENE TIEMPO DE RETIRO' ] },
      { nombre: 'SAGAH', dosis: { status1: 0.62, status2: 0.1, status3: 0.250 }, precioPorKilo: 38800, bacterias: ['Clostridium **','Estafilococcus spp***','Estreptococcus***', 'NO TIENE TIEMPO DE RETIRO'] }
     ],
    finalizador: [
      { nombre: 'FRACTAL', dosis: { status1: 1.0, status2: 1.5, status3: 2.0 }, precioPorKilo: 38800, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA' ] },
      { nombre: 'EXOLUTION', dosis: { status1: 0.5, status2: 0.8, status3: 1.0 }, precioPorKilo: 36300, bacterias: ['E. coli','Salmonela spp','Clostridium', 'MEJORADOR DE LA EFICIENCIA ALIMENTICIA, EFECTO RESIDUAL VS Salmonella' ] },
      { nombre: 'CELMANAX', dosis: { status1: 1.5, status2: 1.8, status3: 2.0 }, precioPorKilo: 17500, bacterias: ['E. coli','Salmonela spp','Clostridium','MEJORADOR DE LA EFICIENCIA ALIMENTICIA'] },
      { nombre: 'HALQUINOX 500', dosis: { status1: 0.7, status2: 0.1, status3: .120 }, precioPorKilo: 70400, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **',] },
      { nombre: 'HALQUINOX 800', dosis: { status1: 0.4, status2: 0.6, status3: 0.75 }, precioPorKilo: 94700, bacterias: ['E. coli***', 'Salmonella spp***','Corynebacterium spp***', 'Clostridium **'] },
      { nombre: 'DMB', dosis: { status1: 0.3, status2: 0.4, status3: 0.5 }, precioPorKilo: 18500, bacterias: ['Brachyspira spp***', 'Clostridium ***','Estafilococcus spp***','Estreptococcus***','Corynobactereium spp*', 'NO TIENE TIEMPO DE RETIRO' ] },
      { nombre: 'SAGAH', dosis: { status1: 0.62, status2: 0.1, status3: 0.250 }, precioPorKilo: 38800, bacterias: ['Clostridium **','Estafilococcus spp***','Estreptococcus***', 'NO TIENE TIEMPO DE RETIRO'] }
    ]
  }
};

const antagonismos = {
  'FENIFLOR': ['AMOXIN 600', 'NEOCYN'],
  'AMOXIN 600': ['FENIFLOR','DINAMIX 200', 'DINAMIX 800', 'TILCOMIX', 'TILOMIX 250','DQCICLIN','TRIMBAC','DQCICLIN'],
  'NEOCYN': ['FENIFLOR','DINAMIX 200', 'DINAMIX 800', 'TILCOMIX', 'TILOMIX 250','DQCICLIN','TRIMBAC'],
  'LINCOX': ['DINAMIX 200', 'DINAMIX 800', 'TILCOMIX', 'TILOMIX 250'],
  'DINAMIX 200': ['LINCOX','NEOCYN'],
  'DINAMIX 800': ['LINCOX'],
  'TILCOMIX': ['LINCOX'],
  'TILOMIX 250': ['LINCOX'],
  'DQCICLIN' : ['AMOXIN 600','NEOCYN'],
  'TRIMBAC' : ['AMOXIN 600','NEOCYN']
};

let selectedProducts = [];
let totalCost = 0;
let currentType = '';
let currentPhase = '';

function showPhases(type) {
  currentType = type;

  // Resaltar el botón seleccionado
  const respBtn = document.getElementById('respiratorio-btn');
  const digestBtn = document.getElementById('digestivo-btn');
  respBtn.classList.remove('selected');
  digestBtn.classList.remove('selected');

  if (type === 'respiratorio') {
    respBtn.classList.add('selected');
  } else {
    digestBtn.classList.add('selected');
  }

  const phasesDiv = document.getElementById('phases');
  phasesDiv.style.display = 'block';
  phasesDiv.innerHTML = '<p>Selecciona la fase de alimentación:</p>';
  const phases = ['fase1', 'fase2', 'fase3', 'iniciador', 'levante', 'engorde', 'finalizador'];
  phases.forEach(phase => {
    const button = document.createElement('button');
    button.innerText = phase.charAt(0).toUpperCase() + phase.slice(1);
    button.onclick = () => showProducts(phase);
    phasesDiv.appendChild(button);
  });
}

function showProducts(phase) {
  currentPhase = phase;

  // Verifica si el tipo y la fase existen en el objeto productos
  if (!productos[currentType]) {
    console.error(`Tipo no encontrado: ${currentType}`);
    return;
  }

  if (!productos[currentType][phase]) {
    console.error(`Fase no encontrada: ${phase} para el tipo: ${currentType}`);
    return;
  }

  if (!Array.isArray(productos[currentType][phase])) {
    console.error(`La fase ${phase} no contiene productos como un array.`);
    return;
  }

  const productDiv = document.getElementById('products');
  productDiv.style.display = 'block';
  productDiv.innerHTML = '<h2>Selecciona productos y su dosis:</h2>';

  productos[currentType][phase].forEach((product, index) => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    const button = document.createElement('button');
    button.innerText = `${product.nombre}`;
    button.onclick = () => toggleDoses(index);
    productContainer.appendChild(button);

    const bacteriaDiv = document.createElement('div');
    bacteriaDiv.classList.add('bacteria-info');
    bacteriaDiv.style.display = 'none';
    bacteriaDiv.innerHTML = `<p>Este producto es efectivo contra: ${product.bacterias.join(', ')}</p>`;
    productContainer.appendChild(bacteriaDiv);

    const doseDiv = document.createElement('div');
    doseDiv.classList.add('dose-options');
    doseDiv.style.display = 'none';
    doseDiv.innerHTML = `
      <p>Selecciona el nivel de enfermedad:</p>
      <button onclick="addProduct(${index}, 'status1')">Status 1 (${product.dosis.status1} kg/ton)</button>
      <button onclick="addProduct(${index}, 'status2')">Status 2 (${product.dosis.status2} kg/ton)</button>
      <button onclick="addProduct(${index}, 'status3')">Status 3 (${product.dosis.status3} kg/ton)</button>
    `;
    productContainer.appendChild(doseDiv);
    productDiv.appendChild(productContainer);
  });
}

function toggleDoses(index) {
  const productContainers = document.getElementsByClassName('product-container');
  const doseDiv = productContainers[index].querySelector('.dose-options');
  const bacteriaDiv = productContainers[index].querySelector('.bacteria-info');
  if (doseDiv.style.display === 'block') {
    doseDiv.style.display = 'none';
    bacteriaDiv.style.display = 'none';
  } else {
    doseDiv.style.display = 'block';
    bacteriaDiv.style.display = 'block';
  }
}

function addProduct(index, status) {
  const product = productos[currentType][currentPhase][index];
  const dosis = product.dosis[status];
  const costo = dosis * product.precioPorKilo;
  const selectedProduct = {
    nombre: product.nombre,
    dosis: `${dosis} kg/ton`,
    costo: costo
  };

  // Verificar antagonismos
  for (let selected of selectedProducts) {
    if (antagonismos[selected.nombre] && antagonismos[selected.nombre].includes(product.nombre)) {
      alert(`Antagonismo detectado: ${selected.nombre} no es compatible con ${product.nombre}`);
      break; // Mostrar alerta pero permitir agregar el producto
    }
  }

  selectedProducts.push(selectedProduct);
  totalCost += costo;
  updateLocalStorage();
  updateSelectedProducts();
}

function removeProduct(index) {
  totalCost -= selectedProducts[index].costo;
  selectedProducts.splice(index, 1);
  updateLocalStorage();
  updateSelectedProducts();
}

function updateSelectedProducts() {
  const selectedList = document.getElementById('selected-list');
  selectedList.innerHTML = '';
  selectedProducts.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerText = `${product.nombre} - ${product.dosis} - $${product.costo.toFixed(2)}`;
    li.onclick = () => removeProduct(index);
    selectedList.appendChild(li);
  });
  document.getElementById('total-cost').innerText = totalCost.toFixed(2);
}

function updateLocalStorage() {
  localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  localStorage.setItem('totalCost', totalCost);
}
// Modulo de Comparador de Precios
function comparePrices() {
  // Obtener los valores de los productos competidores
  const competitorProduct = document.getElementById('competitor-product').value;
  const competitorPrice = parseFloat(document.getElementById('competitor-price').value);
  const competitorConcentration = parseFloat(document.getElementById('competitor-concentration').value);

  // Obtener los valores de los productos nuestros
  const selectedProduct = document.getElementById('selected-product').value;
  const ourPrice = parseFloat(document.getElementById('our-price').value);
  const ourConcentration = parseFloat(document.getElementById('concentracion').value); // corregido

  // Verificar que todos los campos estén completos y que los valores sean números válidos
  if (!competitorProduct || isNaN(competitorPrice) || isNaN(competitorConcentration) || !selectedProduct || isNaN(ourPrice) || isNaN(ourConcentration)) {
    alert('Por favor, completa todos los campos con valores válidos antes de comparar.');
    return;
  }

  // Calcular el precio ajustado por concentración para ambos productos
  const adjustedCompetitorPrice = competitorPrice / competitorConcentration;
  const adjustedOurPrice = ourPrice / ourConcentration;

   // Calcular la conversión del precio ajustado del competidor a la concentración de nuestro producto
   let competitorPriceAtOurConcentration = adjustedCompetitorPrice * ourConcentration;
  // Comparar los precios ajustados
let resultMessage = '';
  if (competitorPriceAtOurConcentration < ourPrice) {
    resultMessage = `El producto competidor (${competitorProduct}) es más barato cuando se ajusta a la concentración de nuestro producto (${selectedProduct}).`;
  } else if (competitorPriceAtOurConcentration > ourPrice) {
    resultMessage = `Nuestro producto (${selectedProduct}) es más barato en comparación con el competidor (${competitorProduct}) cuando ajustamos la concentración.`;
  } else {
    resultMessage = `Ambos productos tienen el mismo precio ajustado por concentración.`;
  }
  // Mostrar el resultado en la página
  const resultDiv = document.getElementById('comparison-result');
  resultDiv.innerHTML = `
    <h3>Resultado de la Comparación</h3>
    <p>Producto Competidor (${competitorProduct}): Precio ajustado = $${adjustedCompetitorPrice.toFixed(2)} por concentración</p>
    <p>Conversión del precio del competidor ajustado a nuestra concentración (${ourConcentration}%): $${competitorPriceAtOurConcentration.toFixed(2)} por kilo</p>
    <p>Nuestro Producto (${selectedProduct}): Precio ajustado = $${adjustedOurPrice.toFixed(2)} por concentración</p>
    <p>${resultMessage}</p>
  `;

  } 


// Función para manejar el cambio de producto seleccionado en el comparador de precios
function handleProductChange() {
  const selectedProductElement = document.getElementById("selected-product");
  const selectedProductName = selectedProductElement.value;

  // Busca el producto seleccionado en el objeto productos para obtener su concentración
  let foundProduct = null;

  // Recorremos cada tipo de producto (respiratorio, digestivo, etc.)
  for (const type in productos) {
    for (const phase in productos[type]) {
      foundProduct = productos[type][phase].find(product => product.nombre === selectedProductName);
      if (foundProduct) break; // Si encontramos el producto, salimos del bucle
    }
    if (foundProduct) break;
  }
  if (foundProduct) {
    // Actualiza el campo de concentración con el valor encontrado
    document.getElementById('concentracion').value = foundProduct.concentracion || '';  // Asigna la concentración si está disponible
    
  } else {
    // Si no se encuentra el producto, limpia el campo de concentración
    document.getElementById('concentracion').value = '';
   
  }
}

// Añadir un evento de cambio al select para que llame a la función handleProductChange cuando cambie el valor seleccionado
document.getElementById("selected-product").addEventListener("change", handleProductChange);


// Inicializar la carga desde LocalStorage
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);



