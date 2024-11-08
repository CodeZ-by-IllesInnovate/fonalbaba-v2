'use strict';

/**
 * mintak service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mintak.mintak');
