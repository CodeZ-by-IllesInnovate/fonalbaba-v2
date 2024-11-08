'use strict';

/**
 * amigurumi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::amigurumi.amigurumi');
