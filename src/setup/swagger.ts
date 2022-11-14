import { swaggerSpec } from '../utils/swagger';
import express, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import path from 'path';

export function initSwagger(app: core.Express) {
    // Docs in JSON format
    app.get('/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    app.use(express.static(path.join(__dirname, 'public')));

    const schemaOptions = {
        swaggerOptions: {
            dom_id: '#swagger-ui',
            tagsSorter: 'alpha',
            operationsSorter: 'alpha',
            docExpansion: 'none',
        },
    };

    // Setup Swagger API Documentation
    const swaggerUi = require('swagger-ui-express');
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, schemaOptions));
}
