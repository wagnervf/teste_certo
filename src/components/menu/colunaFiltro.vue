<template>

  <div class="q-ma-none responsive">

    <div v-if="telaMD || telaLG || telaXL">
      <div class="row justify-center">
        <img
          src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
          class="avatar q-ma-sm responsive"
        >
      </div>

      <q-list class="q-pl-none responsive shadow-1">
        <div class="text-center ">
          <q-card class="bg-grey-3 q-py-sm shadow-0">
            Escolha a Categorias
          </q-card>
        </div>
        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="house"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Imóveis
            </q-item-section>
          </template>

          <q-card class="responsive">
            <q-list class="responsive">
              <q-item
                clickable
                v-ripple
                class="q-pb-none"
                exact
                :to="{ name: 'novo-imovel'}"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Venda</q-item-label>
                  <q-item-label caption>Casas e Apartamentos</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator
                class="q-my-xs"
                spaced
              />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Aluguel</q-item-label>
                  <q-item-label caption>Casas e Apartamentos</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Terrenos</q-item-label>
                  <q-item-label caption>Sítios e Fazendas</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Comércio</q-item-label>
                  <q-item-label caption>Galpões e Indústrias</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

            </q-list>
          </q-card>
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="directions_car"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Auto Peças
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
          <q-separator spaced />
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="sports_handball"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Esportes
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
          <q-separator spaced />
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="house"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Imóveis
            </q-item-section>
          </template>

          <q-card class="responsive">
            <q-list class="responsive">
              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Venda</q-item-label>
                  <q-item-label caption>Casas e Apartamentos</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator
                class="q-my-xs"
                spaced
              />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Aluguel</q-item-label>
                  <q-item-label caption>Casas e Apartamentos</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Terrenos</q-item-label>
                  <q-item-label caption>Sítios e Fazendas</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Comércio</q-item-label>
                  <q-item-label caption>Galpões e Indústrias</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

            </q-list>
          </q-card>
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="directions_car"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Auto Peças
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
          <q-separator spaced />
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="sports_handball"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Esportes
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
          <q-separator spaced />
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="house"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Imóveis
            </q-item-section>
          </template>

          <q-card class="responsive">
            <q-list class="responsive">
              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Venda</q-item-label>
                  <q-item-label caption>Casas e Apartamentos</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator
                class="q-my-xs"
                spaced
              />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Aluguel</q-item-label>
                  <q-item-label caption>Casas e Apartamentos</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Terrenos</q-item-label>
                  <q-item-label caption>Sítios e Fazendas</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item
                clickable
                v-ripple
                class="q-pb-none"
              >
                <q-item-section>
                  <q-item-label class="text-primary">Comércio</q-item-label>
                  <q-item-label caption>Galpões e Indústrias</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon
                    color="primary"
                    name="arrow_right"
                  />
                </q-item-section>
              </q-item>

              <q-separator spaced />

            </q-list>
          </q-card>
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="directions_car"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Auto Peças
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
          <q-separator spaced />
        </q-expansion-item>

        <q-expansion-item>
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="sports_handball"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section class="text-subtitle2">
              Esportes
            </q-item-section>
          </template>

          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
          <q-separator spaced />
        </q-expansion-item>

      </q-list>
    </div>

  </div>

</template>
<style>
.q-table__middle .q-tablet.body.td:after {
  background: none !important;
}
.q-img__content > div {
  padding: 4px;
}
</style>

<script>
import { Screen } from 'quasar'
import tabsJson from 'src/dados/TabsIndex.json'
import mixinUtils from 'src/mixins/mixin-utils'

export default {
  mixins: [mixinUtils],
  data () {
    return {
      tabs: tabsJson,
    }
  }
}
</script>

<style>
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: #555;
  margin-top: 4px;
}
</style>