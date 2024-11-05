import { injectable } from 'tsyringe';
import { ContinentRepository } from './continent.repository';
import { Continent } from './continent.model';

@injectable()
export class ContinentService {
  constructor(private continentRepository: ContinentRepository) {}

  getItems(): Promise<Continent[]> {
    return this.continentRepository.getItems();
  }

}
