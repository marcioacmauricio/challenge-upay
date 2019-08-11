const Entitys = {
    "MasterModelTable": {
        "id": 0,
        "Title": "Tabela Modelo",
        "EntityPredesc": ""
    },
    "MasterUser": {
        "id": 0,
        "Title": "User",
        "EntityPredesc": ""
    },
    "MasterAddress": {
        "id": 0,
        "Title": "Address",
        "EntityPredesc": "MasterUser"
    },
    "MasterTablePermission": {
        "id": 0,
        "Title": "Table permission",
        "EntityPredesc": ""
    },
    "MasterColumnPermission": {
        "id": 0,
        "Title": "Column permission",
        "EntityPredesc": "MasterModelTable"
    },
    "MasterMailConfirmation": {
        "id": 0,
        "Title": "Mail confirmation",
        "EntityPredesc": "MasterUser"
    },
    "MasterMailTemplate": {
        "id": 0,
        "Title": "Mail template",
        "EntityPredesc": ""
    },
    "MasterPasswordRecovery": {
        "id": 0,
        "Title": "Password recovery",
        "EntityPredesc": "MasterUser"
    },
    "MasterResource": {
        "id": 0,
        "Title": "Resource",
        "EntityPredesc": ""
    },
    "MasterUserGroup": {
        "id": 0,
        "Title": "User group",
        "EntityPredesc": ""
    },
    "MasterUserGroupResource": {
        "id": 0,
        "Title": "User group resource",
        "EntityPredesc": "MasterUserGroup"
    },
    "MasterUserUserGroup": {
        "id": 0,
        "Title": "User user group",
        "EntityPredesc": "MasterUser"
    },
    "MasterAuthentication": {
        "id": 0,
        "Title": "Authentication",
        "EntityPredesc": "MasterUser"
    },
    "TicketsPromoter": {
        "id": 0,
        "Title": "Promotoras",
        "EntityPredesc": ""
    },
    "TicketsEvent": {
        "id": 0,
        "Title": "Eventos",
        "EntityPredesc": ""
    },
    "TicketsTicket": {
        "id": 0,
        "Title": "Tickets",
        "EntityPredesc": "TicketsPromoter"
    },
    "TicketsCoupon": {
        "id": 0,
        "Title": "Cupons",
        "EntityPredesc": "TicketsPromoter"
    },
    "TicketsSale": {
        "id": 0,
        "Title": "Meus Tickets",
        "EntityPredesc": "MasterUser"
    },
    "TicketsCart": {
        "id": 0,
        "Title": "Carrinho",
        "EntityPredesc": "MasterUser"
    },
    "TicketsCartItem": {
        "id": 0,
        "Title": "Item de Carrinho",
        "EntityPredesc": "TicketsCart"
    }
}
export default Entitys