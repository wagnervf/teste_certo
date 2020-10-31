<template>
  <q-page class="row col-6 q-col-gutter-sm justify-center">
    <q-form
      @submit="submitForm"
      @reset="onReset"
      class="col-lg-8 col-md-8 col-xs-12 col-sm-12 q-py-xs"
    >
      <q-card>
        <q-card-section class="bg-grey-1 q-pa-sm">
          <div class="text-h6 q-pa-sm">Anunciar imóvel</div>
        </q-card-section>
        <q-card-section class="q-py-xs">

          <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-sm">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-select
                label="Tipo"
                outlined
                v-model="formData.categoria"
                :options="categorias"
                filled
                ref="tipo"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
                autofocus
                clearable
              >
              </q-select>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <q-select
                outlined
                v-model="formData.modalidade"
                :options="modalidades"
                filled
                label="Modalidade"
                ref="modalidade"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
                clearable
              >
                <template v-slot:selected>
                  <q-chip
                    v-if="formData.modalidade"
                    dense
                    square
                    color="primary"
                    text-color="white"
                    class="q-my-none q-ml-xs q-mr-none"
                  >
                    {{ formData.modalidade }}
                  </q-chip>
                  <q-badge v-else></q-badge>
                </template>
              </q-select>
            </div>
          </div>

          <div class="q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
            <q-input
              v-model="formData.titulo"
              ref="titulo"
              label="Título"
              class="q-py-md"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
              outlined
              clearable
            >
              <template v-slot:prepend>
                <q-icon name="account_box" />
              </template>
            </q-input>
          </div>

          <div class="q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
            <q-input
              v-model="formData.descricao"
              ref="descricao"
              label="Descrição"
              class="q-py-xs"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
              outlined
              type="textarea"
              clearable
            >
              <template v-slot:prepend>
                <q-icon name="account_box" />
              </template>
            </q-input>
          </div>

          <div class="row q-col-gutter-x-xs q-col-gutter-y-xs">
            <div class="col-12">
              <q-input
                outlined
                v-model="formData.cep"
                label="Cep do Imóvel"
                ref="cep"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Obrigatório'] "
                clearable
                class="text-h6"
              />
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-input
                outlined
                v-model="formData.estado"
                label="Estado"
                ref="estado"
                dense
                readonly
                filled
              />
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-input
                outlined
                v-model="formData.cidade"
                label="Cidade"
                ref="cidade"
                dense
                readonly
                filled
              />
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-input
                outlined
                v-model="formData.bairro"
                label="Bairro"
                ref="bairro"
                dense
                readonly
                filled
              />
            </div>
          </div>

          <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <q-select
                outlined
                v-model="formData.garagem"
                :options="options"
                label="Garagem"
                ref="garagem"
                clearable
              />
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">

              <q-select
                outlined
                v-model="formData.banheiros"
                :options="options"
                label="Banheiros"
                ref="banheiros"
                clearable
              />
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <q-input
                outlined
                v-model="formData.area"
                label="Área"
                ref="area"
              />
            </div>
          </div>

          <div class="q-gutter-md q-py-xs">
            <q-card class="bg-grey-1 shadow-0 text-subtitle2">
              <q-card-section class="q-pa-sm text-primary">Detalhes do imóvel</q-card-section>
              <q-card-section class="q-pt-none">
                <div class="rounded-borders">
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
              </q-card-section>
            </q-card>
          </div>

          <div class="q-gutter-md q-py-xs">
            <q-card class="bg-grey-1 shadow-0 text-subtitle2">
              <q-card-section class="q-pa-sm text-primary">Observação</q-card-section>
              <q-card-section class="row q-pt-none">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <q-toggle
                    name="condominio"
                    ref="condominio"
                    v-model="formData.condominio"
                    label="Possui Condomínio"
                  />
                </div>
                <div
                  v-if="formData.condominio"
                  class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12"
                >
                  <q-input
                    outlined
                    v-model="formData.condominio_valor"
                    label="Valor Condomínio"
                    dense
                    ref="valor_condominio"
                    type="number"
                    prefix="R$"
                    clearable
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>

          <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
            <div class="col-12">
              <q-input
                outlined
                v-model="formData.valor"
                type="number"
                prefix="R$"
                class="text-h6"
                ref="valor"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Obrigatório']"
                clearable
              >
              </q-input>
            </div>
          </div>

          <div class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
            <div class="col">
              <q-input
                filled
                v-model="formData.contato"
                label="Contato"
                ref="contato"
                mask="(##)##### - ####"
                hint="Mask: (##) ##### - ####"
                clearable
              />
            </div>
          </div>

        </q-card-section>

        <q-card-section class="row q-col-gutter-x-xs q-col-gutter-y-xs q-py-xs">
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
              style="min-height:200px"
            >

              <!-- <template v-slot:list="scope">
                <q-list separator>
                  <q-item
                    v-for="file in scope.files"
                    :key="file.name"
                  >
                    <q-item-section style="min-height:80px">
                      <q-item-label class="full-width ellipsis">
                        {{ file.name }}
                      </q-item-label>

                      <q-item-label caption>
                        Status: {{ file.__status }}
                      </q-item-label>

                      <q-item-label caption>
                        {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                      </q-item-label>
                    </q-item-section>

                    <q-item-section
                      v-if="file.__img"
                      thumbnail
                      class="q-gutter-xs"
                    >
                      <img :src="file.__img.src">
                    </q-item-section>

                    <q-item-section
                      top
                      side
                    >
                      <q-btn
                        class="gt-xs"
                        size="large"
                        flat
                        dense
                        round
                        color="red"
                        icon="close"
                        @click="scope.removeFile(file)"
                      />
                    </q-item-section>
                  </q-item>

                </q-list>
              </template> -->

            </q-uploader>
          </div>

        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            :loading="loading"
            size="large"
            color="info"
            type="submit"
            con-right="send"
            class="text-capitalize"
          >
            Salvar Dados
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Salvando...
            </template>
          </q-btn>
        </q-card-actions>

      </q-card>

      <pre>
          {{formData}}
      </pre>

    </q-form>

  </q-page>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  name: "UserProfile",
  mixins: [mixinUtils],

  data () {
    return {
      formData: {
        uid: '',
        titulo: 'Casa nova',
        valor: '2514',
        categoria: 'casa',
        cep: '79051510',
        modalidade: 'venda',
        tipo: 'casa',
        piscina: false,
        academia: false,
        portaria: false,
        garagem: '2',
        banheiros: '3',
        area: '100',
        condominio: true,
        condominio_valor: '12',
        descricao: 'Casa próximo da padaria e das escolas',
        contato: '67991081550',
        estado: 'MS',
        cidade: 'Campo Grande',
        bairro: 'MOrumbi'
      },
      user_details: {},
      password_dict: {},
      dadosUpdate: true,
      modelSingle: 'Apple',
      modelMultiple: ['Facebook'],

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      categorias: [
        'Casa', 'Apartamento', 'Terreno', 'Barracão', 'Fazenda'
      ],
      modalidades: [
        'Vender', 'Alugar'
      ],

      model: null,
      //options: stringOptions,
      isPwd: true,
      name: null,
      age: null,
      accept: false,
      icons: '',
      loading: false,
    }
  },
  mounted () {
  },


  computed: {
    ...mapGetters('store_auth', ['getUserLogged'])
  },

  methods: {
    ...mapActions('store_auth', ['addUserProfileFB', 'updateProfileLogin']),
    ...mapActions('store_db_anuncios', ['addImovelFB']),

    submitForm () {
      this.$refs.tipo.validate()
      this.$refs.modalidade.validate()

      if (!this.$refs.tipo.hasError && !this.$refs.modalidade.hasError) {

      }




    },

    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },

    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },





    onReset () {
      this.titulo = null
      this.age = null
      this.accept = false
    }
  }


}
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