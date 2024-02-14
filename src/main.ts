import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('api.port');
  const environment = config.get('environment');

  const swaggerConfig = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Hire Latam API Test')
      .setDescription(`A test designed to create a client's insurance API`)
      .setVersion('1.0')
      .addBearerAuth(
        { name: 'Authorization', scheme: 'Bearer', type: 'http' },
        'Authentication',
      )
      .build(),
  );

  SwaggerModule.setup('api/doc', app, swaggerConfig);

  app.enableCors(config.get('cors'));

  app.listen(port, () => {
    console.log('API running on port ', port);
    console.log(`You're working on environment `, environment);
  });
}
bootstrap();
