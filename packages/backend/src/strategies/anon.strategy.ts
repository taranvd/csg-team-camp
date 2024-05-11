import passport from 'passport';
import { Strategy } from 'passport-anonymous';

passport.use('anon', new Strategy());
