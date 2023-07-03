import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/local',
      name: 'local',
      component: () => import('../views/LocalView.vue')
    },
    {
      path: '/ate',
      name: 'ate',
      component: () => import('../components/BembosAte.vue')
    },
    {
      path: '/cercado',
      name: 'cercado',
      component: () => import('../components/BemboCercadoLima.vue')
    },
    {
      path: '/chorrillos',
      name: 'chorrillos',
      component: () => import('../components/BemboChorrillos.vue')
    },
    {
      path: '/comas',
      name: 'comas',
      component: () => import('../components/BemboComas.vue')
    },
    {
      path: '/independencia',
      name: 'independencia',
      component: () => import('../components/BemboIndependencia.vue')
    },
    {
      path: '/jmaria',
      name: 'jmaria',
      component: () => import('../components/BemboJesusMaria.vue')
    },
    {
      path: '/lmolina',
      name: 'lmolina',
      component: () => import('../components/BemboLaMolina.vue')
    },
    {
      path: '/lvictoria',
      name: 'lvictoria',
      component: () => import('../components/BemboLaVictoria.vue')
    },
    
    {
      path: '/magdalena',
      name: 'magdalena',
      component: () => import('../components/BemboMagdalena.vue')
    },
    
    {
      path: '/miraflores',
      name: 'miraflores',
      component: () => import('../components/BemboMiraflores.vue')
    },
    {
      path: '/plibre',
      name: 'plibre',
      component: () => import('../components/BemboPuebloLibre.vue')
    },
    {
      path: '/phermosa',
      name: 'phermosa',
      component: () => import('../components/BemboPuntaHermosa.vue')
    },
    {
      path: '/sborja',
      name: 'sborja',
      component: () => import('../components/BemboSanBorja.vue')
    },
    {
      path: '/sisidro',
      name: 'sisidro',
      component: () => import('../components/BemboSanIsidro.vue')
    },
    {
      path: '/sjmiraflores',
      name: 'sjmiraflores',
      component: () => import('../components/BemboSJMiraflores.vue')
    },
    
    {
      path: '/smporres',
      name: 'smporres',
      component: () => import('../components/BemboSMPorres.vue')
    },
    {
      path: '/smiguel',
      name: 'smiguel',
      component: () => import('../components/BemboSanMiguel.vue')
    },
    {
      path: '/sanita',
      name: 'sanita',
      component: () => import('../components/BemboSantaAnita.vue')
    },
    {
      path: '/surquillo',
      name: 'surquillo',
      component: () => import('../components/BemboSurquillo.vue')
    },

    //SECCION PREGUNTAS BODY
    {
      path: '/seccionpreguntas',
      name: 'seccionpreguntas',
      component: () => import('../components/SeccionPreguntas.vue')
    },

    //SECCION LIMA bembolima
    {
      path: '/bembolima',
      name: 'bembolima',
      component: () => import('../components/BemboLima.vue')
    },

    //SECCION Arequipa bemboarequipa
    {
      path: '/bemboarequipa',
      name: 'bemboarequipa',
      component: () => import('../components/BemboArequipa.vue')
    },


    // SEDEATE

    {
      path: '/sedeate',
      name: 'sedeate',
      component: () => import('../components/SedeAte.vue')
    },
    //Sede Santa Clara
    
    {
      path: '/sclara',
      name: 'sclara',
      component: () => import('../components/SedeSClara.vue')
    },

    // Sede Real plaza puruchuco
    
    {
      path: '/splazapuruchuco',
      name: 'splazapuruchuco',
      component: () => import('../components/SedePuruchuco.vue')
    },

    //SEDE AREQUIPA
    
    {
      path: '/ccoloradoarequipa',
      name: 'ccoloradoarequipa',
      component: () => import('../components/SedeCColoradoArequipa.vue')
    },
    
    {
      path: '/rplazaarequipa',
      name: 'rplazaarequipa',
      component: () => import('../components/SedeRPlazaArequipa.vue')
    },
    
    {
      path: '/mallarequipa',
      name: 'mallarequipa',
      component: () => import('../components/SedeMallArequipa.vue')
    },




  ]
})

export default router
