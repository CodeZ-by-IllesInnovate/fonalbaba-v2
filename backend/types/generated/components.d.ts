import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderCim extends Struct.ComponentSchema {
  collectionName: 'components_header_cim_s';
  info: {
    displayName: 'C\u00EDm ';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header.cim': HeaderCim;
    }
  }
}
