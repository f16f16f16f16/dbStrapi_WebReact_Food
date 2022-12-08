'use strict';

/**
 * forum-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::forum-api.forum-api');
