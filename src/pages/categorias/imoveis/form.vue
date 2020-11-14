<template>

  <div>
    <q-form
      v-on:submit.prevent="onSubmit"
      class="fit row wrap justify-center items-start content-start gucci1 justify-center"
      role="form"
    >

      <q-card class="col-lg-10 col-xl-10 col-md-10 col-sm-12 col-xs-12">
        <q-card-section
          class="bg-grey-3 justify-center"
          role="banner"
          v-focus
          tabindex="0"
        >
          <label class="text-capitalize text-grey">Categoria / Modalidade</label>
          <q-breadcrumbs
            role="link"
            aria-label="Voltar para pagina anterior ou início"
          >
            <q-breadcrumbs-el
              label="Início"
              :to="'/index'"
            />
            <q-breadcrumbs-el
              label="Imoveis"
              :to="'/imoveis'"
            />
            <q-breadcrumbs-el label="Cadastro" />
          </q-breadcrumbs>
        </q-card-section>

        <q-card-section class="q-gutter-y-md">
          <div class="text-center">
            <h1 class="text-h5">Cadasto do Imóvel</h1>
          </div>
          <div class="row q-gutter-x-md q-pa-sm q-pl-none">
            <q-card class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-none">
              <q-card-section class="text-subtitle2 font18 bg-grey-3"><label>Escolha o Tipo do imóvel</label></q-card-section>
              <q-card-section>
                <q-list
                  v-for="tipo in tipos"
                  :key="tipo.nome"
                  bordered
                  aria-label="Selecione o tipo do imóvel"
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
              </q-card-section>
            </q-card>

            <q-card class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 q-pa-none justify-end">
              <q-card-section class="text-subtitle2 font18 bg-grey-3"><label>Vender ou Alugar</label></q-card-section>
              <q-card-section>
                <q-list
                  v-for="mod in modalidades"
                  :key="mod.nome"
                  bordered
                  aria-label="Selecione a modalidade do imóvel vender ou alugar"
                  title="Selecione a modalidade do imóvel vender ou alugar"
                  padding
                  class="rounded-borders text-grey-9 font18 q-py-none formItemList"
                  role="list"
                >
                  <q-item
                    clickable
                    v-ripple
                    :active="linkModalidade === mod"
                    :title="mod"
                    :aria-label="mod"
                    @click="modalidadeSelecionada(mod)"
                    active-class="my-menu-link"
                    role="listitem"
                    tabindex="0"
                    class="font22"
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
              </q-card-section>
            </q-card>
          </div>

          <div>
            <label class="text-subtitle2">Título</label>
            <q-input
              v-model="formData.titulo"
              ref="titulo"
              class="q-py-xs"
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
              :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
              outlined
              type="textarea"
              clearable
              label="Informe a descrição do anúncio"
              role="form"
            />
          </div>
          <!-- Descrição -->

          <div>
            <label class="text-subtitle2">Fotos do anúncio</label>
            <q-uploader
              url="http://localhost:4444/upload"
              label="Selecione as fotos do anúncio"
              title="Selecione as fotos do anúncio"
              aria-label="Faça o upload das fotos do anúncio, até 10 fotos"
              ref="fotos"
              multiple
              batch
              max-files="3"
              auto-upload
              accept=".jpg, image/*"
              @rejected="onRejected"
              class="full-width bg-grey-2"
              style="min-height: 200px"
              role="document"
            >
            </q-uploader>

          </div>
          <!-- Fotos -->

          <!-- mask="#####-####" -->
          <div>
            <label class="text-subtitle2">Cep do Imóvel</label>
            <q-input
              bottom-slots
              outlined
              v-model="formData.cep"
              ref="cep"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
              class="text-h6"
              label="Informe o cep do imóvel"
              aria-placeholder="Após digitar o cep clique no botão pesquisar cep."
              counter
              max-values="9"
              type="number"
              role="form"
            >
              <template v-slot:after>
                <q-btn
                  :disable="cepMinimo"
                  color="orange"
                  class="text-capitalize q-px-md q-py-sm"
                  label="Pesquisar Cep"
                  role="button"
                  @click="buscarCEP(formData.cep)"
                />
              </template>
            </q-input>
          </div>
          <!-- cep -->

          <div class="row col-12">
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
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
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
                title="Informe o contato do anúnciante"
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
                title="Informe o contato do anúnciante"
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
                title="Informe o valor do imóvel anunciado"
                role="form"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
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
                  label="Informe a área do imóvel"
                  title="Informe a área do imóvel"
                />
              </div>
            </div>
            <!-- Detalhes do imóvel -->
            <q-separator class="q-my-md" />

            <div class="row q-mx-sm">
              <label class="row col-12 q-py-xs q-ma-sm text-primary">Opções</label>
              <q-toggle
                name="piscina"
                v-model="formData.piscina"
                true-value="piscina"
                label="Piscina"
                ref="piscina"
              />

              <q-toggle
                name="academia"
                v-model="formData.academia"
                true-value="academia"
                label="Academia"
                ref="academia"
              />

              <q-toggle
                name="portaria"
                v-model="formData.portaria"
                true-value="portaria"
                label="Portaria"
                ref="portaria"
              />
            </div>
            <!-- Opções do imóvel -->

            <q-separator class="q-my-md" />

            <div class="row col-12 q-mx-sm">
              <label class="row col-12 q-py-xs q-ma-sm text-primary">Condomínio</label>
              <div class="row">
                <q-toggle
                  name="condominio"
                  ref="condominio"
                  v-model="formData.condominio"
                  label="Possui Condomínio"
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
                clearable
              />
            </div>
            <!-- Condomínio -->

          </q-expansion-item>
        </q-card-section>

        <q-card-actions class="q-gutter-md">
          <q-btn
            outline
            color="red"
            icon-right="close"
            class="text-capitalize q-py-none"
            @click="cancelar()"
            role="button"
            type="button"
          >
            <span class="q-ma-xs">Cancelar</span>
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Cancelando...
            </template>
          </q-btn>

          <q-space />

          <q-btn
            :loading="loading"
            color="teal"
            role="button"
            type="button"
            icon-right="check"
            class="text-capitalize q-py-none"
            @click="onSubmit"
          >
            <span class="q-ma-xs">Publicar Anúncio</span>
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Salvando...
            </template>
          </q-btn>
        </q-card-actions>

      </q-card>

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
import colunaFilter from 'src/components/menu/colunaFiltro'
import menuCards from 'src/components/menu/menuCards'
import tabsJson from 'src/dados/TabsIndex.json'
import { date } from 'quasar'



import {
  notifyGenericPositive,
  notifyGenericNegative,
} from "src/functions/functions-notify";

export default {
  name: "UserProfile",
  mixins: [mixinUtils],

  components: {
    colunaFilter,
    menuCards
  },

  data () {
    return {
      tabs: tabsJson,
      tab: 'informacoes',
      linkCategoria: '',
      linkModalidade: '',
      formData: {
        //  uid: "",
        titulo: "",
        valor: "",
        categoria: "imovel",
        cep: "",
        modalidade: "",
        tipo: "",
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

      categoriaClicked: '',
      madalidadeClicked: '',

      user_details: {},
      password_dict: {},
      dadosUpdate: true,
      cepEncontrado: false,
      cepNaoEncontrado: false,
      modelSingle: "Apple",
      modelMultiple: ["Facebook"],

      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],

      tipos: ["Casa", "Apartamento", "Terreno", "Barracão", "Fazenda"],
      modalidades: ["Vender", "Alugar"],

      model: null,
      //options: stringOptions,
      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: "",
      loading: false,
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
    }
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

<style >
.my-menu-link {
  color: white;
  background: #344973;
  border-radius: 8px;
}
</style>