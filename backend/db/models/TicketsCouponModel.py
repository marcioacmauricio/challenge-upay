TicketsCouponModel = {
    "description": "Cupons",
    "primary_key": "id",
    "key_type": "serial",
    "table": "coupon",
    "title": "Cupons",
    "schema": "tickets",
    "table_predesc": "promoter",
    "schema_predesc": "tickets",
    "sec_table_predesc": "",
    "sec_schema_predesc": "",
    "main_table_schema": "TicketPromoter",
    "sec_table_schema": "",
    "columns": {
        "id": {
            "description": "ID",
            "title": "ID",
            "nickname": "id",
            "field_type": "KeyIncremente",
            "parameters": {
                "type": "SERIAL",
                "validation": "isInteger",
                "required": 1,
                "primary_key": "1"
            }
        },
        "ordering": {
            "description": "Ordering",
            "title": "Ordering",
            "nickname": "ordering",
            "field_type": "Ordering",
            "parameters": {
                "type": "SMALLINT",
                "validation": "isInteger",
                "required": 0
            }
        },
        "state": {
            "description": "State",
            "title": "State",
            "nickname": "state",
            "field_type": "State",
            "parameters": {
                "type": "SMALLINT",
                "validation": "isInteger",
                "required": 0
            }
        },
        "checked_out": {
            "description": "Checked Out",
            "title": "Checked Out",
            "nickname": "checked_out",
            "field_type": "CheckedOut",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "user",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0"
            }
        },
        "checked_out_time": {
            "description": "Checked Out Time",
            "title": "Checked Out Time",
            "nickname": "checked_out_time",
            "field_type": "CheckedOutTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": 0
            }
        },
        "created_by": {
            "description": "Created By",
            "title": "Created By",
            "nickname": "created_by",
            "field_type": "CreatedBy",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "user",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0"
            }
        },
        "created_time": {
            "description": "Created Time",
            "title": "Created Time",
            "nickname": "created_time",
            "field_type": "CreatedTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": 0
            }
        },
        "modified_by": {
            "description": "Modified By",
            "title": "Modified By",
            "nickname": "modified_by",
            "field_type": "ModifiedBy",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "user",
                "colLabel": "id",
                "colValue": "first_name",
                "colDescription": "middle_names",
                "required": "0"
            }
        },
        "modified_time": {
            "description": "Modified Time",
            "title": "Modified Time",
            "nickname": "modified_time",
            "field_type": "UpdatedTime",
            "parameters": {
                "type": "TIMESTAMP WITHOUT TIME ZONE",
                "validation": "isDateTime",
                "required": 0
            }
        },
        "id_promoter": {
            "description": "Promotoras",
            "title": "Promotoras",
            "nickname": "id_promoter",
            "field_type": "KeyDimension",
            "parameters": {
                "type": "BIGINT",
                "Table": "promoter",
                "Schema": "tickets",
                "colLabel": "title",
                "colValue": "id",
                "required": "0",
                "colDescription": "description"
            }
        },
        "code": {
            "description": "C\u00f3digo",
            "title": "C\u00f3digo",
            "nickname": "code",
            "field_type": "Input",
            "parameters": {
                "type": "CHARACTER VARYING",
                "validation": "isString",
                "required": 1
            }
        },
        "descount": {
            "description": "Desconto",
            "title": "Desconto",
            "nickname": "descount",
            "field_type": "Numeric",
            "parameters": {
                "type": "NUMERIC",
                "validation": "isNumeric",
                "length": "11",
                "precision": "3",
                "required": 0
            }
        }
    }
}
