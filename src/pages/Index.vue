<template>
  <q-page :style-fn="myTweak">
    <a
      href="index/#conteudoPrincipal"
      id="conteudoPrincipal"
      class="pularNavegacao"
    >Pular para conteúdo principal</a>

    <section class="text-center ">
      <q-banner
        class="bg-grey-1"
        id="conteudoPrincipal"
      >
        <h1 class="gucci1 text-h3">Anúncios</h1>
        <q-btn
          class="bg-game6 text-capitalize q-pa-sm"
          size="large"
          label="Ver Anúncios"
          push
          role="button"
        />
        <h2 class="text-h6">Desapegue daquilo que você não é mais apegado.</h2>

        <i class="las la-battery-three-quarters"></i>
      </q-banner>
    </section>

    <q-separator />

    <section>
      <div class="row justify-center q-pa-md">
        <h3 class="gucci1 text-h6">Imóveis em Destaques</h3>
      </div>
      <div class="q-pa-xs text-right">
        <q-btn
          class="text-capitalize q-mb-none"
          flat
          color="primary"
          label="Ver todos anúncio de imóveis"
          role="Ver todos anúncio de imóveis"
          icon-right="read_more"
          :to="'/imoveis'"
        />
      </div>

      <cardsDestaques />
    </section>

    <q-separator />

    <section class="bg-white text-center">
      <q-banner>
        <div class="row fit justify-center q-mb-lg">
          <div class="col-6 col-md-4 q-mx-md">
            <h1 class="gucci1 text-h3">Lorem ipsum dolor sit amet</h1>
            <p class="gucci1 text-h5">
              Desapegue daquilo que você não é mais apegado.
            </p>
          </div>

          <div
            class="col-6 col-md-4 col-sm-6 col-xs-12 q-mx-md"
            aria-labelledby="tituloDestaque1"
            role="img"
          >
            <figure>
              <q-img
                src="img/penguin.svg"
                style="max-width: 150px"
                alt="Homem feliz caminhando. Ilustração"
              />
              <figcaption
                class="text-caption"
                id="tituloDestaque1"
                style="visibility: hidden"
              >
                Homem feliz caminhando. Ilustração
              </figcaption>
            </figure>
          </div>
        </div>
      </q-banner>
    </section>

    <q-separator />

  </q-page>
</template>


<script>
import cardsDestaques from "src/components/novidades/cardsDestaques";
export default {
  meta: {
    // sets document title
    title: "Index Page",
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: (title) => `${title} - O Lugar Certo`,

    // meta tags
    meta: {
      description: { name: "description", content: "O Lugar Certo" },

      //habilitar ZOOM no celular
      description: { name: "viewport", content: "width=device-width" },

      keywords: { name: "keywords", content: "O Lugar Certo, olc" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8",
      },
      // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
      ogTitle: {
        name: "og:title",
        // optional; similar to titleTemplate, but allows templating with other meta properties
        template (ogTitle) {
          return `${ogTitle} - O Lugar Certo`;
        },
      },
    },

    // CSS tags
    link: {
      material: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    },

    // JS tags
    script: {
      ldJson: {
        type: "application/ld+json",
        innerHTML: `{ "@context": "http://schema.org" }`,
      },
    },

    // <body> attributes
    bodyAttr: {
      "action-scope": "xyz", // generates <body action-scope="xyz">
      empty: undefined, // generates <body empty>
    },

    // <noscript> tags
    noscript: {
      default: "This is content for browsers with no JS (or disabled JS)",
    },
  },
  components: {
    cardsDestaques,
  },

  methods: {
    myTweak (offset) {
      return { minHeight: offset ? `calc(100vh - ${offset}px)` : "100vh" };
    },
  },
};
</script>

