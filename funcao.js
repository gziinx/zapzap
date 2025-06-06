/****************************************************************
 * objetivo: missao 666
 * data: 28/01/2025
 * autor: gustavo
 * versao: 1.0
 ****************************************************************/

const projetoWhat = require("./contatos")

const getDadosUsuarios = function (aruan) {
    let edukof = {}

    projetoWhat.contatos["whats-users"].forEach(function(portuga){
        if (portuga.number == aruan){
            edukof = {
                id: portuga.id,
                account: portuga.account,
                created_since: portuga["created-since"],
                number: portuga.number
            }
        }
    })

    return edukof
}

//console.log(getDadosUsuarios('11966578996'))

const getDadosConta = function (aruan) {
    let edukof = {}

    projetoWhat.contatos["whats-users"].forEach(function(portuga){
        if (portuga.number == aruan){
            edukof = {
                nickname: portuga.nickname,
                profile_image: portuga["profile-image"],
                background: portuga.background
                
            }
        }
    })

    return edukof
}

//console.log(getDadosConta('11966578996'))


const getDadosContato = function (aruan) {

    let edukof = []

    projetoWhat.contatos["whats-users"].forEach(function(portuga){
        if (portuga.number == aruan){
            portuga.contacts.forEach(function(maycon){
                edukof.push({
                    name: maycon.name,
                    description: maycon.description,
                    image: maycon.image
                    
                })
            })
            
        }
    })

    return edukof
}

//console.log(getDadosContato('11966578996'))

const getConvContato = function (numero) {
    let status = false
    let user = String(numero)
    let conversasContatos = {}
    let whatsUsers = []

    projetoWhat.contatos["whats-users"].forEach(function(item){
        item.contacts.forEach(function(item2){
            if(String(item.number) == user){
                whatsUsers.push({
                    name: item2.name,
                    profile: item2["image"],
                    description: item2.description,
                    convensas: item2.messages
                })
                status = true
            }
        })
    })
    conversasContatos.conversas = whatsUsers

    if(status == true){
        return conversasContatos
    }else{
        return status
    }
}

//console.log(getConvContato('11966578996'))

const getNomeContato = function (aruan, crespo) {

    let edukof = []
    

    projetoWhat.contatos["whats-users"].forEach(function(portuga){
        if (portuga.number == aruan){
         portuga.contacts.forEach(function(maycon){
         maycon.messages.forEach(function(afrein){
            if (maycon.name == crespo){  
                    edukof.push ({

                        name: maycon.name,
                        description: maycon.description,
                        image: maycon.image,
                        messages: afrein

                    })
                }
                })
            })
            
        }
    })

    return edukof
}

//console.log(getNomeContato('11987876567','Jane Smith'))

const getPalavraChave = function (aruan, crespo, ravanha) {

    let edukof = []

    projetoWhat.contatos["whats-users"].forEach(function(portuga){
        if (portuga.number == aruan){
         portuga.contacts.forEach(function(maycon){
            if (maycon.name == crespo){
         maycon.messages.forEach(function(afrein){
                if(afrein.content.includes (ravanha)){

                    edukof.push ({

                        sender: afrein.sender,
                        content: afrein.content,
                        time: afrein.time

                         })
                     }           
                
             })
         }
     })
            
}

})

    return edukof
}
//console.log(getPalavraChave('11987876567','Ana Maria', 'Leonid'))






module.exports = {
    getConvContato,
    getDadosConta,
    getDadosContato,
    getDadosUsuarios,
    getNomeContato,
    getPalavraChave
}