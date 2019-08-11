const TicketEventModel = {
    "description": "Eventos",
    "primary_key": "id",
    "key_type": "serial",
    "title": "Eventos",
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
                "TableSchema": "TicketEvent",
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
                "TableSchema": "TicketEvent",
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
                "TableSchema": "TicketEvent",
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
        "id_promoter": {
            "description": "Promotoras",
            "nickname": "id_promoter",
            "title": "Promotoras",
            "ordering": 10,
            "field_type": "ForeignKey",
            "parameters": {
                "colLabel": "title",
                "colValue": "id",
                "required": "0",
                "colDescription": "description",
                "TableSchema": "TicketEvent",
                "TableSchemaPredesc": "TicketsPromoter"
            }
        },
        "title": {
            "description": "T\u00edtulo",
            "nickname": "title",
            "title": "T\u00edtulo",
            "ordering": 11,
            "field_type": "Input",
            "parameters": {
                "validation": "isString",
                "required": 1
            }
        },
        "image": {
            "description": "Image",
            "nickname": "image",
            "title": "Image",
            "ordering": 12,
            "field_type": "Image",
            "parameters": {
                "validation": "isImage",
                "required": 0
            }
        },
        "description": {
            "description": "Descri\u00e7\u00e3o",
            "nickname": "description",
            "title": "Descri\u00e7\u00e3o",
            "ordering": 12,
            "field_type": "Textarea",
            "parameters": {
                "validation": "isString",
                "required": 0
            }
        },
        "price": {
            "description": "Pre\u00e7o",
            "nickname": "price",
            "title": "Pre\u00e7o",
            "ordering": 14,
            "field_type": "Numeric",
            "parameters": {
                "validation": "isNumeric",
                "length": "10",
                "precision": "3",
                "required": 0
            }
        }
    }
}
export default TicketEventModel