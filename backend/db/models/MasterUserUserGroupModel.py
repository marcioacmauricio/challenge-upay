MasterUserUserGroupModel = {
    "description": "User user group",
    "primary_key": "id",
    "key_type": "serial",
    "table": "user_user_group",
    "title": "User user group",
    "schema": "master",
    "table_predesc": "user",
    "schema_predesc": "master",
    "sec_table_predesc": "",
    "sec_schema_predesc": "",
    "main_table_schema": "MasterUser",
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
        "id_user": {
            "description": "User",
            "title": "User",
            "nickname": "id_user",
            "field_type": "KeyDimension",
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
        "id_user_group": {
            "description": "Grupo",
            "title": "Grupo",
            "nickname": "id_user_group",
            "field_type": "ForeignKey",
            "parameters": {
                "type": "INTEGER",
                "validation": "isInteger",
                "Schema": "master",
                "Table": "user_group",
                "colLabel": "title",
                "colValue": "id",
                "required": "1",
                "colDescription": "description"
            }
        }
    }
}
