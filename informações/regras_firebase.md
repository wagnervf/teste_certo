###Atualizar dados Firebase

dbRefUsers.child(firebase.auht(0.currentUser.uid).child(key).update(data).then(function () {
'atualizado com sucesso'
}).catch(function (error){
'erro ao atualizar'
})

##Regras de Permissões

- Qualquer user logado \*
  {
  "rules": {
  ".read": "auth != null",
  ".write": "auth != null",
  }
  }

- Acesso restrito ao dono dos dados \*
  {
  "rules": {
  "users": {
  "$uid": {
          ".read": "$uid == auth.uid",
  ".write": "\$uid == auth.uid ",
  }
  }
  }
  }

* Acesso restrito ao dono dos dados E o campo NAME de ser STRING E possui até 30 caracterees \*
  {
  "rules": {
  "users": {
  "$uid": {
          ".read": "$uid == auth.uid",
  ".write": "\$uid == auth.uid ",
  "\$tid" : {
  ".validate" : "newData.child('name').isString() && newData.child('name').val().length <= 30" >
  }
  }
  }
  }
  }

- Pesquisa os resultados

  dbRefUsers.child(user.id)
  .orderByChild('name') //ordena as tarefas por nome
  .startAt(search.value).endArt(search.value + '\uf8ff') // delimita os resultados
  .onde('value').then(function(dataSnaptshop){
  console.log(dataSnaptshop)
  })
