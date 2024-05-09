import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import UserService from '@/services/user/user.service';

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.SECRET_KEY as string,
};

export const configurePassport = (userService: UserService): void => {
	const jwtStrategy = new JWTStrategy(jwtOptions, async (payload, done) => {
		try {
			const user = await userService.findById(payload.id);
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		} catch (error) {
			return done(error, false);
		}
	});

	passport.use(jwtStrategy);
};
