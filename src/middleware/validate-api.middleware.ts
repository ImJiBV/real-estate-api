import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateApiMiddleware implements NestMiddleware {
	private readonly validApiKey = process.env.API_KEY; 

	use(req: Request, res: Response, next: NextFunction) {
		const apiKey = req.headers['x-api-key'] || req.headers['X-Api-Key'];

		if (!apiKey || apiKey !== this.validApiKey) {
			throw new UnauthorizedException('Unauthorized Access');
		}

		next();
	}
}
