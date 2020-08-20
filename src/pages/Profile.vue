<template>
  <q-page class="q-pa-sm q-pt-lg">
    <div class="row q-col-gutter-sm justify-center">
      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card>
          <q-card-section class="text-h6 ">
            <div class="text-h6">Editar Meus Dados</div>
          </q-card-section>
          <q-card-section class="q-pa-sm">
            <q-list class="row">
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section side>
                  <q-avatar size="100px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-btn
                    label="Adicionar Foto"
                    class="text-capitalize"
                    rounded
                    color="info"
                    style="max-width: 120px"
                  ></q-btn>
                </q-item-section>
              </q-item>

              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dense
                    v-model="user_details.user_name"
                    label="Nome"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dense
                    v-model="user_details.email"
                    label="Email"
                  />
                </q-item-section>
              </q-item>
              <q-item class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-item-section>
                  <q-input
                    dense
                    v-model="user_details.post_code"
                    label="CEP"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-info text-white">Salvar Dados</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-lg-8 col-md-8 col-xs-12 col-sm-12">
        <q-card>
          <q-card-section class="text-h6 q-pa-sm">
            <div class="text-h6">Alterar Senha</div>
          </q-card-section>
          <q-card-section class="q-pa-sm row">
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Senha Atual
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dense
                  outlined
                  round
                  v-model="password_dict.current_password"
                  label="Senha Atual"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Nova Senha
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dense
                  outlined
                  round
                  v-model="password_dict.new_password"
                  label="Nova Senha"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-item-section>
                Confirmar Nova Senha
              </q-item-section>
            </q-item>
            <q-item class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-item-section>
                <q-input
                  type="password"
                  dense
                  outlined
                  round
                  v-model="password_dict.confirm_new_password"
                  label="Confirmar Nova Senha"
                />
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-capitalize bg-info text-white">Salvar Nova Senha</q-btn>
          </q-card-actions>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "UserProfile",
  data () {
    return {
      user_details: {},
      password_dict: {}
    }
  }
}
</script>

