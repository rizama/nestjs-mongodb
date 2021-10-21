import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('bootstrap');

    logger.log(`Application run listen to Port: 3000`);
    await app.listen(3000);
}
bootstrap();
