import Home from "./views/Home.vue";
import Soporte from "./views/Soporte";
import Acompanamiento from "./views/Acomponamiento";
import publicarWork from "./views/PublicarWork";
import Iniciado from "./views/Principal";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/soporte",
    name: "support",
    component: Soporte
  },
  {
    path: "/registrar-trabajo",
    name: "acompanamiento",
    component: Acompanamiento
  },
  {
    path: "/publicar-trabajo",
    name: "newTrabajo",
    component: publicarWork
  },
  { path: "/iniciado", name: "sesionIniciado", component: Iniciado }
];
