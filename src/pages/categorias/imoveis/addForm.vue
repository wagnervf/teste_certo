<template>
  <div>
    <breadcrumbs :breadcrumbs="breadcrumbs" />

    <q-form
      v-on:submit.prevent="onSubmit"
      class="wrap justify-center items-start content-start gucci1"
      role="form"
    >
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        animated
        alternative-labels
        flat
        :contracted="telaXS"
      >
        <q-step
          :name="1"
          title="Selecione a Categoria"
          icon="settings"
          :done="step > 1"
          caption="1/3"
          class="bg-grey-1 q-my-md q-pb-md"
        >
          <div class="row justify-center q-gutter-sm">
            <div
              class="text-center col-12"
              role="banner"
              tabindex="0"
            >
              <h1
                class="text-h5"
                tabindex="0"
                title="Selecione o tipo do imóvel"
              >Selecione o tipo do imóvel</h1>
            </div>
            <q-card
              bordered
              :class="imovelSelecionado === imovel.name ? 'w-card-selecionada' : 'w-card'"
              class="shadow-1"
              v-for="imovel in tipos"
              :key="imovel.id"
              @click="seleciona(imovel)"
              tabindex="0"
              role="link"
            >
              <h3 class="text-h6 q-ma-none">{{imovel.name}}</h3>
              <q-card-section>
                <q-icon
                  size="4em"
                  :name="imovel.icon"
                  :aria-placeholder="imovel.label"
                  role="img"
                  class="w-avatar"
                />
                <figcaption class="escondeVisualmente">{{imovel.name}}</figcaption>
              </q-card-section>

            </q-card>
          </div>

        </q-step><!-- Step 1 -->

        <q-step
          :name="2"
          title="Preencha os dados do imóvel"
          caption="2/3"
          icon="create_new_folder"
          :done="step > 2"
          class="q-pa-none"
        >

          <div class="col-lg-10 col-xl-10 col-md-10 col-sm-12 col-xs-12 q-gutter-y-md q-px-sm">
            <!-- <div class="row q-gutter-md p-mb-md">
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div
                class="text-subtitle2 font18 bg-grey-3 q-pa-md"
                tabindex="0"
                title="Escolha o Tipo do imóvel 5 opções"
              >
                <label>Escolha o Tipo do imóvel</label>
              </div>

              <q-list
                v-for="tipo in tipos"
                :key="tipo.nome"
                bordered
                title="Selecione o tipo do imóvel"
                padding
                class="rounded-borders text-grey-9 font18 q-py-none formItemList"
                role="list"
              >
                <q-item
                  clickable
                  v-ripple
                  :active="linkTipo === tipo"
                  :title="tipo"
                  :aria-label="tipo"
                  @click="tipoSelecionado(tipo)"
                  active-class="my-menu-link"
                  :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
                  role="listitem"
                  tabindex="0"
                  class="font22"
                >
                  <q-item-section :aria-label="tipo">{{tipo}}</q-item-section>
                  <q-item-section
                    avatar
                    v-if="linkTipo === tipo"
                  >
                    <q-icon name="check" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div> -->
            <div class="justify-center text-center q-my-lg">
              <q-separator />
              <h6
                class="font18 q-my-none bg-grey-2 q-pa-xs"
                tabindex="0"
                v-focus
              >Vender ou Alugar</h6>

              <div class="row justify-center q-pa-md">
                <q-card
                  :class="linkModalidade === mod ? 'w-card-modalidade' : 'w-modalidade'"
                  bordered
                  class="shadow-1"
                  v-for="mod in modalidades"
                  :key="mod.nome"
                  @click="modalidadeSelecionada(mod)"
                  tabindex="0"
                  @keypress="modalidadeSelecionada(mod)"
                >
                  <q-card-section class="q-pa-sm">
                    <h6 class="q-ma-none">{{mod}}</h6>
                  </q-card-section>
                </q-card>
              </div>
              <q-separator />
            </div>
            <!-- <div
                class="row text-subtitle2 font18 bg-grey-3 q-pa-md shadow-1"
                tabindex="0"
              ><label>Vender ou Alugar</label></div>

              <q-list
                
                bordered
                title="Selecione a modalidade do imóvel vender ou alugar"
                padding
                class="rounded-borders text-grey-9 font18 q-py-none formItemList itemAlugar flex"
                role="list"
              >
                <q-item
                  clickable
                  v-ripple
                  :active="linkModalidade === mod"
                  :title="mod"
                  :aria-label="mod"
                  
                  active-class="my-menu-link"
                  role="listitem"
                  tabindex="0"
                  class="font22 "
                >
                  <q-item-section :aria-label="mod">{{mod}}</q-item-section>
                  <q-item-section
                    avatar
                    v-if="linkModalidade === mod"
                  >
                    <q-icon name="check" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div> -->
            <!-- Tipo e modalidade -->

            <div class="p-mt-md">
              <label class="text-subtitle2">Título</label>
              <q-input
                v-model="formData.titulo"
                ref="titulo"
                class="q-py-xs"
                type="text"
                required
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
                outlined
                clearable
                label="Informe o título do anúncio"
                role="form"
              >
              </q-input>
            </div>
            <!-- Título -->

            <div>
              <label class="text-subtitle2">Descrição</label>
              <q-input
                v-model="formData.descricao"
                ref="descricao"
                class="q-py-xs"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Ops! O título é obrigatório']"
                outlined
                type="textarea"
                clearable
                label="Informe a descrição do anúncio"
                role="form"
              />
            </div>
            <!-- Descrição -->

            <div>
              <label class="text-subtitle2">Cep do Imóvel</label>
              <q-input
                bottom-slots
                outlined
                v-model="formData.cep"
                ref="cep"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Ops! O Cep é obrigatório']"
                class="text-h6"
                label="Informe o cep do imóvel"
                aria-placeholder="Após digitar o cep clique no botão pesquisar cep."
                aria-required="Ops! O Cep é obrigatório"
                required
                counter
                max-values="9"
                type="number"
                role="form"
              >
                <template v-slot:after>
                  <q-btn
                    :disable="cepMinimo"
                    color="orange"
                    class="text-capitalize q-pa-sm"
                    label="Pesquisar"
                    role="button"
                    @click="buscarCEP(formData.cep)"
                  />
                </template>
              </q-input>
            </div>
            <!-- cep -->

            <div class="row col-12 q-gutter-x-sm">
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <label class="text-subtitle2">Estado</label>
                <q-input
                  outlined
                  v-model="formData.estado"
                  ref="estado"
                  dense
                  :readonly="cepEncontrado"
                  filled
                  arial-label="Digite o UF"
                  role="form"
                />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <span class="text-subtitle2">Cidade</span>
                <q-input
                  outlined
                  v-model="formData.cidade"
                  ref="cidade"
                  dense
                  :readonly="cepEncontrado"
                  filled
                  arial-label="Digite a cidade"
                  role="form"
                />
              </div>
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12">
                <span class="text-subtitle2">Logradouro</span>
                <q-input
                  outlined
                  v-model="formData.logradouro"
                  ref="bairro"
                  dense
                  :readonly="cepEncontrado"
                  filled
                  arial-label="Digite o logradouro"
                  role="form"
                />
              </div>
            </div>
            <!-- cep -->

            <div class="row">
              <div class="col">
                <label class="text-subtitle2">Contato</label>
                <q-input
                  class="col"
                  type="number"
                  outlined
                  v-model="formData.contato"
                  ref="contato"
                  clearable
                  label="Informe o contato do anúnciante"
                  hint="(99)9999 - 999"
                  role="form"
                />

                <q-input
                  class="col"
                  type="number"
                  outlined
                  v-model="formData.contato"
                  ref="contato"
                  clearable
                  label="Informe o contato do anúnciante"
                  hint="(99)9999999"
                  role="form"
                />
              </div>
            </div>
            <!-- Contato -->

            <div class="row col-12">
              <label class="text-primary text-h6">Valor</label>
              <div class="col-12">
                <q-input
                  outlined
                  v-model="formData.valor"
                  type="number"
                  prefix="R$"
                  class="text-h6"
                  ref="valor"
                  label="Informe o valor do imóvel anunciado"
                  role="form"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Ops! O Valor é obrigatório']"
                  required
                  clearable
                >
                </q-input>
              </div>
            </div>
            <!-- Valor -->

            <q-expansion-item
              expand-separator
              icon="pool"
              class="text-primary shadow-1 q-my-md q-my-md text-subtitle2"
              label="Mais Informações do imóvel"
              caption="Banheiros / Garagem / Condomínio / "
            >
              <q-separator class="q-my-md" />

              <div class="row q-col-gutter-x-sm q-col-gutter-y-sm q-pa-md">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <label class="text-subtitle2">Garagem</label>
                  <q-select
                    outlined
                    dense
                    v-model="formData.garagem"
                    :options="options"
                    ref="garagem"
                    role="combobox"
                    label="Informe a número de garagem"
                    title="Informe a número de garagem"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <label class="text-subtitle2">Banheiros</label>
                  <q-select
                    outlined
                    dense
                    v-model="formData.banheiros"
                    :options="options"
                    ref="banheiros"
                    role="combobox"
                    label="Informe a número de banheiros"
                    title="Informe a número de banheiros"
                  />
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <label class="text-subtitle2">Área</label>
                  <q-input
                    outlined
                    dense
                    v-model="formData.area"
                    ref="area"
                    role="form"
                    label="Informe a área do imóvel"
                    title="Informe a área do imóvel"
                  />
                </div>
              </div>
              <!-- Detalhes do imóvel -->
              <q-separator class="q-my-md" />

              <div class="row q-mx-sm">
                <label class="row col-12 q-py-xs q-ma-sm text-primary">Opções</label>
                <q-checkbox
                  name="piscina"
                  v-model="formData.piscina"
                  true-value="piscina"
                  label="Possui Piscina"
                  title="Possui Piscina"
                  aria-checked="Selecionado"
                  ref="piscina"
                  role="checkbox"
                />

                <q-checkbox
                  name="academia"
                  v-model="formData.academia"
                  true-value="academia"
                  label="Possui Academia"
                  title="Possui Academia"
                  aria-selected="Selecionado"
                  ref="academia"
                  role="checkbox"
                />

                <q-checkbox
                  name="portaria"
                  v-model="formData.portaria"
                  true-value="portaria"
                  label="Possui Academia"
                  title="Possui Portaria"
                  ref="portaria"
                  role="checkbox"
                />
              </div>
              <!-- Opções do imóvel -->

              <q-separator class="q-my-md" />

              <div class="row col-12 q-mx-sm">
                <label class="row col-12 q-py-xs q-ma-sm text-primary">Condomínio</label>
                <div class="row">
                  <q-checkbox
                    name="condominio"
                    ref="condominio"
                    v-model="formData.condominio"
                    label="Possui Condomínio"
                    title="Possui Condomínio"
                  />
                </div>
              </div>

              <div
                v-if="formData.condominio"
                class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 text-grey-9 q-pa-md"
              >
                <label class="text-subtitle2">Valor Condomínio</label>
                <q-input
                  outlined
                  v-model="formData.condominio_valor"
                  dense
                  ref="valor_condominio"
                  type="number"
                  prefix="R$"
                  title="Valor Condomínio"
                  role="form"
                  clearable
                />
              </div>
              <!-- Condomínio -->

            </q-expansion-item>
          </div>

        </q-step> <!-- Step 2 -->

        <q-step
          :name="3"
          title="Anexar as Fotos"
          caption="3/3"
          icon="camera_alt"
          style="min-height:900px; background: #f1f1f18a;"
          class="stepAnexarFoto"
        >
          <div class="text-center">
            <label class="text-h6 q-my-md">Fotos do anúncio</label>
            <q-uploader
              url="http://localhost:4444/upload"
              label="Selecione as fotos do anúncio"
              title="Insira as fotos do anúncio"
              ref="fotos"
              multiple
              batch
              max-files="3"
              auto-upload
              accept=".jpg, image/*"
              @rejected="onRejected"
              class="full-width bg-grey-2 q-my-md"
              style="min-height: 900px"
              tabindex="0"
            >
            </q-uploader>
          </div>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation class="q-mx-xs">
            <q-btn
              v-if="step < 3"
              @click="proximo($refs.stepper)"
              color="primary"
              label="Próximo Passo"
              class="full-width text-capitalize"
              size="large"
              icon-right="keyboard_arrow_right"
            />

            <q-btn
              v-if="step === 3"
              :loading="loading"
              color="teal"
              role="button"
              type="button"
              icon-right="check"
              size="large"
              class="text-capitalize full-width"
              @click="onSubmit"
            >
              <span class="q-ma-xs">Publicar Anúncio</span>
              <template v-slot:loading>
                <q-spinner-hourglass class="on-left" />
                Salvando...
              </template>
            </q-btn>

            <q-btn
              v-if="step > 1"
              color="purple"
              size="large"
              outline
              @click="voltar($refs.stepper)"
              label="Voltar passo anterior"
              class="q-my-sm full-width text-capitalize"
              icon="keyboard_arrow_left"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </q-form>

    <pre>
          {{ formData }}
      </pre>
  </div>

</template>


<script>
import { mapActions, mapGetters } from "vuex";
import mixinUtils from "src/mixins/mixin-utils";
import serviceCep from "src/services/cep/services-consulta-cep";
import tabsJson from 'src/dados/TabsIndex.json'
import { date } from 'quasar'
import breadcrumbs from 'src/components/breadcrumbs'


import {
  notifyGenericPositive,
  notifyGenericNegative,
} from "src/functions/functions-notify";

export default {
  name: "UserProfile",
  mixins: [mixinUtils],

  components: {
    breadcrumbs
  },

  data () {
    return {
      tabs: tabsJson,
      tab: 'informacoes',

      formData: {
        //  uid: "",
        categoria: "imovel",
        modalidade: "",
        tipo: "",
        titulo: "",
        valor: "",
        cep: "",
        piscina: false,
        academia: false,
        portaria: false,
        garagem: "2",
        banheiros: "3",
        area: "100",
        condominio: true,
        condominio_valor: "12",
        descricao: "",
        contato: "",
        estado: "",
        cidade: "",
        bairro: "",
        logradouro: "",
        ddd: "",
        created: '',
        updated: ''
      },
      step: 1,
      // listaMenus: listaMenus,
      linkTipo: '',
      linkModalidade: '',
      imovelSelecionado: '',
      //tipoSelecionado: '',
      categoriaClicked: '',
      madalidadeClicked: '',

      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],

      tipos: [
        {
          "name": "Casa",
          "icon": "house"
        },
        {
          "name": "Apartamento",
          "icon": "apartment"
        },
        {
          "name": "Terreno",
          "icon": "house_siding"
        },
        {
          "name": "Barracão",
          "icon": "foundation"
        },
        {
          "name": "Fazenda",
          "icon": "fence"
        }

      ],

      modalidades: ["Vender", "Alugar"],
      user_details: {},
      password_dict: {},
      dadosUpdate: true,
      cepEncontrado: false,
      cepNaoEncontrado: false,
      modelSingle: "Apple",
      modelMultiple: ["Facebook"],

      model: null,
      //options: stringOptions,
      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: "",
      loading: false,

      breadcrumbs: [
        {
          'name': 'Início',
          'to': '/index'
        },

        {
          'name': 'Imóveis',
          'to': '/imoveis'
        },

        {
          'name': 'Cadastro',
          'to': '/imoveis/novo'
        }
      ]
    };
  },
  mounted () { },

  computed: {
    ...mapGetters("store_auth", ["getUserLogged"]),

    cepMinimo () {
      if (this.formData.cep.length == 0) {
        this.resetCep()
      }
      return this.formData.cep.length >= 8 ? false : true;
    },

  },

  methods: {
    ...mapActions("store_auth", ["addUserProfileFB", "updateProfileLogin"]),
    ...mapActions("store_db_firebase", ["addAnuncioImoveisVenda"]),

    onSubmit () {
      let timeStamp = Date.now()
      this.formData.created = date.formatDate(timeStamp, 'DD-MM-YYYY HH:mm:ss')
      this.formData.updated = date.formatDate(timeStamp, 'DD-MM-YYYY HH:mm:ss')

      // this.$refs.tipo.validate();
      // this.$refs.modalidade.validate();

      // if (!this.$refs.tipo.hasError && !this.$refs.modalidade.hasError) {
      //this.addAnuncioImoveisVenda(this.formData)
      //  }
    },

    filterFn (val, update) {
      if (val === "") {
        update(() => {
          this.options = stringOptions;

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.options = stringOptions.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },

    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    },

    buscarCEP (cep) {
      if (cep.length > 0) {

        serviceCep.BuscarCEPService(cep).then((resposta) => {
          if (!resposta.data.erro) {
            this.cepNaoEncontrado = false;
            this.cepEncontrado = true;
            this.formData.cep = resposta.data.cep;
            this.formData.estado = resposta.data.uf;
            this.formData.cidade = resposta.data.localidade;
            this.formData.logradouro = resposta.data.logradouro;
            this.formData.ddd = resposta.data.ddd;
            notifyGenericPositive('Cep encontrado')
          } else {
            // this.cepNaoEncontrado = true;
            this.resetCep()
            notifyGenericNegative("CEP não encontrado! Verifique se o cep está correto ou informe o endereço.");
          }
        });
      } else {
        notifyGenericNegative('Verifique o se o cep informado está correto!')
      }


    },

    resetCep () {
      this.cepNaoEncontrado = true;
      this.cepEncontrado = false;
      this.formData.cep = ''
      this.formData.estado = ''
      this.formData.cidade = ''
      this.formData.logradouro = ''
      this.formData.ddd = ''
    },

    cancelar () {
      this.$router.push("/index").catch((err) => { });
    },

    tipoSelecionado (value) {
      this.linkTipo = value
      this.formData.tipo = value

    },

    modalidadeSelecionada (value) {
      this.linkModalidade = value
      this.formData.modalidade = value
      //mixin-utils
      this.descer(350)

    },

    seleciona (value) {
      this.imovelSelecionado = value.name
      //mixin-utils
      this.scrollBottom()
    },

    proximo (value) {
      value.next()
      //$refs.stepper.next()
    },

    voltar (value) {
      value.previous()
    }

    // categoriaClick (value) {
    //   console.log(value)
    //   this.categoriaClicked = value.label
    //   this.formData.categoria = value.label;
    //   this.tab = 'modalidade'
    // },

    // modalidadeClick (value) {
    //   console.log(value)
    //   this.madalidadeClicked = value
    //   this.formData.modalidade = value;
    //   this.tab = 'informacoes'
    // }
  },
};
</script>

<style scoped>
</style> 
