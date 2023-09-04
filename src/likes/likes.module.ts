import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LikesService } from './likes.service';
import { LikesResolver } from './likes.resolver';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from 'src/common/jwt/jwt.module';
import { LikeSchema } from './datatype/like.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    JwtModule,
    MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }]),
  ],
  providers: [LikesService, LikesResolver],
  exports: [LikesService],
})
export class LikesModule {}
