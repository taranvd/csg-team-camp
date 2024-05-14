import JWTService from '@/services/jwt-service/jwt.service';
import UserService from '@/services/user/user.service';
import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

passport.use(
	'jwt',
	new Strategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.SECRET_KEY as string,
		},
		async (payload: { id: string }, done) => {
			try {
				const userService = new UserService(new JWTService());
				const user = await userService.findById(payload.id);
				return done(null, user);
			} catch (e: unknown) {
				return done(e, false);
			}
		},
	),
);
