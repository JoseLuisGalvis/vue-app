<template>
  <div class="section">
    <h2 class="section-title text">Sección 2</h2>
    <p class="text">Este es el contenido de la sección 2.</p>
  </div>
</template>

<script>
export default {
  name: 'SectionTwoComponent',
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%; 
  height: 200px;
  margin: 1em;
  padding: 1em 3em;
  background-color: #5a8dee;
  border-radius: 1em 3em;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3),
                    0 8px 6px rgba(0, 0, 0, 0.1),
                inset 0 8px 6px rgba(0, 0, 0, 0.1),
                inset 8px 0 6px rgba(0, 0, 0, 0.1),
                inset -8px 0 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: white;
  font-size: 24px;
  margin-bottom: 1em;
}

.text {
  color: white;
  font-size: 18px;
}

@media screen and (max-width: 1000px) {
  .section {
    width: 80%; /* Ajuste de ancho para pantallas más pequeñas */
    margin: 1em; /* Ajustar el margen para adaptarse a pantallas medianas */
  }
}

@media screen and (max-width: 700px) {
  .section {
    width: 60%; /* Ajuste de ancho para pantallas más pequeñas */
    margin: 1em; /* Ajustar el margen para adaptarse a pantallas medianas */
  }
}

@media screen and (max-width: 350px) {
  .section {
    width: 40%; /* Ajuste de ancho para pantallas más pequeñas */
    margin: 1em; /* Ajustar el margen para adaptarse a pantallas medianas */
  }
}

@media screen and (max-width: 240px) {
  .section {
    width: 90%; /* Ajuste de ancho adicional para pantallas muy pequeñas para mantener la proporción */
    margin: .5em; /* Ajustar el margen para adaptarse a pantallas muy pequeñas */
    padding: .5em 1em; /* Ajustar el relleno para adaptarse a pantallas muy pequeñas */
    font-size: 12px; /* Ajustar el tamaño del texto para pantallas muy pequeñas */
  }
}

</style>