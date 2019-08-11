const TicketCartItemModel = {
    "description": "Item de Carrinho",
    "primary_key": "id",
    "key_type": "serial",
    "title": "Item de Carrinho",
    "columns": {
        "id": {
            "description": "ID",
            "nickname": "id",
            "title": "ID",
            "ordering": 1,
            "field_type": "KeyIncremente",
            "parameters": {
                "validation": "isInteger",
                "required": 1,
                "primary_key": "1"
            }
        },
        "ordering": {
            "description": "Ordering",
            "nickname": "ordering",
            "title": "Ordering",
            "ordering": 2,
            "field_type": "Ordering",
            "parameters": {
                "validation": "isInteger",
                "required": 0
            }
        },
        "state": {
            "description": "State",
            "nickname": "state",
            "title": "State",
            "ordering": 3,
            "field_type": "State",
            "parameters": {
                "validation": "isInteger",
                "required": 0
            }
        },
        "checked_out": {
            "description": "Checked Out",
            "nickname": "checked_out",
            "title": "Checked Out",
            "ordering": 4,
            "field_type": "CheckedOut",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0",
                "TableSchema": "TicketCartItem",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "checked_out_time": {
            "description": "Checked Out Time",
            "nickname": "checked_out_time",
            "title": "Checked Out Time",
            "ordering": 5,
            "field_type": "CheckedOutTime",
            "parameters": {
                "validation": "isDateTime",
                "required": 0
            }
        },
        "created_by": {
            "description": "Created By",
            "nickname": "created_by",
            "title": "Created By",
            "ordering": 6,
            "field_type": "CreatedBy",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0",
                "TableSchema": "TicketCartItem",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "created_time": {
            "description": "Created Time",
            "nickname": "created_time",
            "title": "Created Time",
            "ordering": 7,
            "field_type": "CreatedTime",
            "parameters": {
                "validation": "isDateTime",
                "required": 0
            }
        },
        "modified_by": {
            "description": "Modified By",
            "nickname": "modified_by",
            "title": "Modified By",
            "ordering": 8,
            "field_type": "ModifiedBy",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0",
                "TableSchema": "TicketCartItem",
                "TableSchemaPredesc": "MasterUser"
            }
        },
        "modified_time": {
            "description": "Modified Time",
            "nickname": "modified_time",
            "title": "Modified Time",
            "ordering": 9,
            "field_type": "UpdatedTime",
            "parameters": {
                "validation": "isDateTime",
                "required": 0
            }
        },
        "id_cart": {
            "description": "Carrinho",
            "nickname": "id_cart",
            "title": "Carrinho",
            "ordering": 10,
            "field_type": "KeyDimension",
            "parameters": {
                "colLabel": "id",
                "colValue": "id",
                "required": "0",
                "colDescription": "id",
                "validation": "isInteger",
                "TableSchema": "TicketCartItem",
                "TableSchemaPredesc": "TicketsCart"
            }
        },
        "id_event": {
            "description": "Evento",
            "nickname": "id_event",
            "title": "Evento",
            "ordering": 11,
            "field_type": "ForeignKey",
            "parameters": {
                "validation": "isInteger",
                "colLabel": "title",
                "colValue": "id",
                "colDescription": "description",
                "required": 0,
                "TableSchema": "TicketCartItem",
                "TableSchemaPredesc": "TicketsEvent"
            }
        },
        "amount": {
            "description": "Quantidade",
            "nickname": "amount",
            "title": "Quantidade",
            "ordering": 12,
            "field_type": "Input",
            "parameters": {
                "validation": "isInteger",
                "required": 0
            }
        },
        "total": {
            "description": "Total",
            "nickname": "total",
            "title": "Total",
            "ordering": 13,
            "field_type": "Numeric",
            "parameters": {
                "validation": "isNumeric",
                "length": "10",
                "precision": "3",
                "default": "0",
                "required": 0
            }
        }
    }
}
export default TicketCartItemModel