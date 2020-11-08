<template>
  <q-page class="row col-8 q-col-gutter-sm justify-center">
    <q-card>
      <q-form
        @submit="submitForm"
        class="col-lg-8 col-md-8 col-xs-12 col-sm-8 q-pa-sm"
      >
        <q-tabs
          v-model="tab"
          dense
          class="text-grey q-py-sm"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <!-- <q-tab
            name="categoria"
            label="Categoria"
          />
          <q-tab
            name="modalidade"
            label="Modalidade"
          />
          <q-tab
            name="informacoes"
            label="Informações"
          /> -->
        </q-tabs>

        <!-- <q-separator /> -->

        <q-tab-panels
          v-model="tab"
          animated
          class="q-py-sm"
        >
          <q-tab-panel
            name="categoria"
            class="q-pa-xs"
          >
            <div class="justify-center row">
              <div class="flex q-gutter-xs col-xl-8 col-md-8 col-sm-8 col-xs-12">
                <q-btn-group
                  v-for="tab in tabs"
                  :key="tab.id"
                >
                  <q-btn
                    color="indigo-8"
                    style="width:110px; height: 90px;"
                    no-caps
                    @click="categoriaClick(tab)"
                    push
                  >
                    <div class="text-center">
                      <q-icon
                        size="3em"
                        :name="tab.icon"
                      /><br>
                      <span>{{tab.label}}</span>
                    </div>
                    <q-tooltip content-class="bg-accent">{{tab.label}}</q-tooltip>
                  </q-btn>
                </q-btn-group>
              </div>
            </div>

          </q-tab-panel>

          <q-tab-panel name="modalidade">
            <q-banner>
              <label class="text-capitalize text-grey">Categoria</label>
              <br>
              <q-btn
                color="primary"
                class="q-pa-sm"
                :label="categoriaClicked"
                no-caps
                @click="tab ='categoria'"
                outline
                flat
              />
              <q-icon name="arrow_right"></q-icon>
              <q-separator />
            </q-banner>

            <div class="justify-center flex q-gutter-sm">

              <q-btn
                color="orange"
                style="width:110px; height: 90px;"
                no-caps
                @click="modalidadeClick('venda')"
                push
              >
                <div class="text-center">
                  <q-icon
                    size="3em"
                    name="monetization_on"
                  /><br>
                  <span>Venda</span>
                </div>
                <q-tooltip content-class="bg-accent">Venda</q-tooltip>
              </q-btn>

              <q-btn
                color="orange"
                style="width:110px; height: 90px;"
                no-caps
                @click="modalidadeClick('alugar')"
                push
              >
                <div class="text-center">
                  <q-icon
                    size="3em"
                    name="money_off"
                  /><br>
                  <span>Alugar</span>
                </div>
                <q-tooltip content-class="bg-accent">Alugar</q-tooltip>
              </q-btn>

            </div>

          </q-tab-panel>

          <q-tab-panel name="informacoes">

            <q-card>
              <q-card-section class="bg-grey-3 q-pa-sm">
                <label class="text-capitalize text-grey">Categoria / Modalidade </label>
                <br>
                <q-btn
                  color="primary"
                  class="q-pa-sm"
                  :label="categoriaClicked"
                  no-caps
                  @click="tab ='categoria'"
                  outline
                  flat
                />
                <q-icon name="arrow_right"></q-icon>

                <q-btn
                  color="primary"
                  class="q-pa-sm"
                  :label="madalidadeClicked"
                  no-caps
                  @click="tab ='modalidade'"
                  outline
                  flat
                />
              </q-card-section>
              <q-card-section class="q-py-xs">

                <!-- <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-sm">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <span class="text-subtitle2">Tipo</span>
                  <q-select
                    outlined
                    v-model="formData.categoria"
                    :options="categorias"
                    filled
                    ref="tipo"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
                    clearable
                    class="text-h6"
                  >
                    <template v-slot:selected>
                      <q-chip
                        v-if="formData.categoria"
                        dense
                        square
                        color="primary"
                        text-color="white"
                        class="q-pa-md"
                      >
                        {{ formData.categoria }}
                      </q-chip>
                      <q-badge v-else></q-badge>
                    </template>
                  </q-select>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <span class="text-subtitle2">Modalidade</span>
                  <q-select
                    outlined
                    v-model="formData.modalidade"
                    :options="modalidades"
                    filled
                    ref="modalidade"
                    class="text-h6"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
                    clearable
                  >
                    <template v-slot:selected>
                      <q-chip
                        v-if="formData.modalidade"
                        dense
                        square
                        color="primary"
                        text-color="white"
                        class="q-pa-md"
                      >
                        {{ formData.modalidade }}
                      </q-chip>
                      <q-badge v-else></q-badge>
                    </template>
                  </q-select>
                </div>
              </div> -->

                <!-- Tipo e Modalidade -->

                <div class="q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
                  <span class="text-subtitle2">Título</span>
                  <q-input
                    v-model="formData.titulo"
                    ref="titulo"
                    class="q-py-xs"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
                    outlined
                    clearable
                  >
                    <template v-slot:prepend>
                      <q-icon name="account_box" />
                    </template>
                  </q-input>
                </div>
                <!-- Título -->

                <div class="q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
                  <span class="text-subtitle2">Descrição</span>
                  <q-input
                    v-model="formData.descricao"
                    ref="descricao"
                    class="q-py-xs"
                    lazy-rules
                    :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
                    outlined
                    type="textarea"
                    clearable
                  />
                </div>
                <!-- Descrição -->

                <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
                  <div class="col-12">
                    <q-uploader
                      url="http://localhost:4444/upload"
                      label="Selecione as Fotos"
                      ref="fotos"
                      multiple
                      batch
                      max-files="3"
                      auto-upload
                      accept=".jpg, image/*"
                      @rejected="onRejected"
                      class="full-width bg-grey-2"
                      style="min-height: 200px"
                    >
                    </q-uploader>
                  </div>
                </div>
                <!-- Fotos -->

                <div class="row q-col-gutter-x-xs q-col-gutter-y-xs">
                  <div class="col-12">
                    <span class="text-subtitle2">Cep do Imóvel</span>

                    <q-input
                      bottom-slots
                      outlined
                      v-model="formData.cep"
                      ref="cep"
                      lazy-rules
                      mask="#####-####"
                      :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
                      clearable
                      class="text-h6"
                    >
                      <template v-slot:after>
                        <q-btn
                          size="large"
                          color="orange"
                          class="text-capitalize q-px-md"
                          label="OK"
                          @click="buscarCEP(formData.cep)"
                        />
                      </template>
                    </q-input>
                  </div>
                </div>
                <!-- cep -->

                <div class="row q-col-gutter-x-xs q-col-gutter-y-xs">
                  <div
                    v-if="cepEncontrado"
                    class="col-12 bg-grey-3 q-pa-md q-ma-none text-caption text-grey-8"
                  >
                    {{ formData.logradouro }} | {{ formData.cidade }} |
                    {{ formData.estado }}
                  </div>

                  <div
                    v-if="cepNaoEncontrado"
                    class="row col-md-12 q-col-gutter-x-sm"
                  >
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <span class="text-subtitle2">Estado</span>
                      <q-input
                        outlined
                        v-model="formData.estado"
                        ref="estado"
                        dense
                        readonly
                        filled
                      />
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <span class="text-subtitle2">Cidade</span>

                      <q-input
                        outlined
                        v-model="formData.cidade"
                        ref="cidade"
                        dense
                        readonly
                        filled
                      />
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <span class="text-subtitle2">Bairro</span>
                      <q-input
                        outlined
                        v-model="formData.bairro"
                        ref="bairro"
                        dense
                        readonly
                        filled
                      />
                    </div>
                  </div>
                </div>
                <!-- cep -->

                <div class="row q-col-gutter-x-md q-col-gutter-y-md q-my-sm q-pa-md text-grey-9">
                  <span class="text-subtitle2 col-12 q-py-xs bg-grey-2">Detalhes do imóvel</span>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 bg-grey-2 q-pa-sm">
                    <span class="text-subtitle2">Garagem</span>
                    <q-select
                      outlined
                      dense
                      v-model="formData.garagem"
                      :options="options"
                      ref="garagem"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 bg-grey-2 q-pa-sm">
                    <span class="text-subtitle2">Banheiros</span>
                    <q-select
                      outlined
                      dense
                      v-model="formData.banheiros"
                      :options="options"
                      ref="banheiros"
                    />
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 bg-grey-2 q-pa-sm">
                    <span class="text-subtitle2">Área</span>
                    <q-input
                      outlined
                      dense
                      v-model="formData.area"
                      ref="area"
                    />
                  </div>
                </div>

                <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
                  <div class="col">
                    <span class="text-subtitle2">Contato</span>
                    <q-input
                      outlined
                      v-model="formData.contato"
                      ref="contato"
                      mask="(##)##### - ####"
                      clearable
                    />
                  </div>
                </div>
                <!-- Contato -->

                <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
                  <div class="col-12">
                    <span class="q-pa-none text-primary text-h6">Valor</span>
                    <q-input
                      outlined
                      v-model="formData.valor"
                      type="number"
                      prefix="R$"
                      class="text-h6"
                      ref="valor"
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
                  class="text-primary shadow-1 q-py-sm text-subtitle2"
                  label="Mais Informações"
                  caption="Banheiros / Garagem / Condomínio / "
                >
                  <!-- 
            <div class="row q-col-gutter-x-md q-col-gutter-y-md q-my-md q-pa-md text-grey-9">
              <span class="q-pt-none text-primary col-12">Mais informações do imóvel</span>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <span class="text-subtitle2">Garagem</span>
                <q-select
                  outlined
                  dense
                  v-model="formData.garagem"
                  :options="options"
                  ref="garagem"
                />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <span class="text-subtitle2">Banheiros</span>
                <q-select
                  outlined
                  dense
                  v-model="formData.banheiros"
                  :options="options"
                  ref="banheiros"
                />
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <span class="text-subtitle2">Área</span>
                <q-input
                  outlined
                  dense
                  v-model="formData.area"
                  ref="area"
                />
              </div>
            </div> -->
                  <!-- Detalhes -->

                  <div class="col-12 q-col-gutter-x-md shadow-0 text-subtitle2 q-ma-md q-px-none text-grey-9">
                    <q-card-section class="q-pa-none text-primary">Mais informações do imóvel</q-card-section>
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

                  <!-- Mais informações -->

                  <div class="row q-col-gutter-x-md q-col-gutter-y-sm q-pa-md text-grey-9">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <span class="q-pt-md"></span>
                      <q-toggle
                        name="condominio"
                        ref="condominio"
                        v-model="formData.condominio"
                        label="Possui Condomínio"
                        class="q-pt-md q-pl-md"
                      />
                    </div>
                    <div
                      v-if="formData.condominio"
                      class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 text-grey-9"
                    >
                      <span class="text-subtitle2">Valor Condomínio</span>
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
                  </div>
                  <!-- Condomínio -->

                </q-expansion-item>
              </q-card-section>
              <!-- Fotos -->

              <q-card-actions class="q-py-md q-col-gutter-xs">
                <q-btn
                  flat
                  color="red"
                  icon-right="close"
                  class="text-capitalize q-py-none"
                  @click="cancelar()"
                  type="onReset"
                >
                  <span class="q-ma-xs">Cancelar Publicação</span>
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Salvando...
                  </template>
                </q-btn>

                <q-space />

                <q-btn
                  :loading="loading"
                  color="teal"
                  type="submit"
                  icon-right="check"
                  class="text-capitalize q-py-none"
                >
                  <span class="q-ma-xs">Publicar Anúncio</span>
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Salvando...
                  </template>
                </q-btn>
              </q-card-actions>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>

        <pre>
          {{ formData }}
      </pre>
      </q-form>
    </q-card>
  </q-page>
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
      tab: 'categoria',
      formData: {
        //  uid: "",
        titulo: "Casa nova",
        valor: "2514",
        categoria: "",
        cep: "79051510",
        modalidade: "",
        tipo: "casa",
        piscina: false,
        academia: false,
        portaria: false,
        garagem: "2",
        banheiros: "3",
        area: "100",
        condominio: true,
        condominio_valor: "12",
        descricao: "Casa próximo da padaria e das escolas",
        contato: "67991081550",
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

      categorias: ["Casa", "Apartamento", "Terreno", "Barracão", "Fazenda"],
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
  },

  methods: {
    ...mapActions("store_auth", ["addUserProfileFB", "updateProfileLogin"]),
    ...mapActions("store_db_firebase", ["addAnuncioImoveisVenda"]),

    submitForm () {
      let timeStamp = Date.now()
      this.formData.created = date.formatDate(timeStamp, 'DD-MM-YYYY HH:mm:ss')
      this.formData.updated = date.formatDate(timeStamp, 'DD-MM-YYYY HH:mm:ss')

      // this.$refs.tipo.validate();
      // this.$refs.modalidade.validate();

      // if (!this.$refs.tipo.hasError && !this.$refs.modalidade.hasError) {
      this.addAnuncioImoveisVenda(this.formData)
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
      serviceCep.BuscarCEPService(cep).then((resposta) => {
        console.log(resposta);

        if (resposta.data.erro) {
          this.cepNaoEncontrado = true;
          notifyGenericNegative(
            "CEP não encontrado! Informe o endereço do imóvel"
          );
        } else {
          this.cepEncontrado = true;
          this.formData.cep = resposta.data.cep;
          this.formData.estado = resposta.data.uf;
          this.formData.cidade = resposta.data.localidade;
          this.formData.logradouro = resposta.data.logradouro;
          this.formData.ddd = resposta.data.ddd;
        }
      });
    },

    cancelar () {
      this.$router.push("/index").catch((err) => { });
    },

    categoriaClick (value) {
      console.log(value)
      this.categoriaClicked = value.label
      this.formData.categoria = value.label;
      this.tab = 'modalidade'
    },

    modalidadeClick (value) {
      console.log(value)
      this.madalidadeClicked = value
      this.formData.modalidade = value;
      this.tab = 'informacoes'
    }
  },
};
</script>

<style>
.q-item__section--thumbnail img {
  width: 180px;
  height: 136px;
}
.q-uploader__file--img {
  width: 300px;
  height: 200px;
}
</style>