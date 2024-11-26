import MySQLAdapter from '../../continent-repository-mysql';

describe('MySQLAdapter', () => {
  let dbClientMock;
  let adapter;

  beforeEach(() => {
    dbClientMock = { query: jest.fn() };
    adapter = new MySQLAdapter(dbClientMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {

    test('should handle invalid pagination parameters', async () => {
      const req = {
        query: {
          page: '-1',
          limit: '0',
        },
      };

      dbClientMock.query.mockResolvedValue([{
        count: 1,
        area: 100,
        population: 1000,
        countriesNumber: 10,
        density: 10,
        countPagination: 1,
        areaPagination: 100,
        populationPagination: 1000,
        countriesNumberPagination: 10,
        densityPagination: 10,
        continents: [],
      }]);

      const result = await adapter.getItems(req);
      expect(result).toBeTruthy();
      // Vérifie que les valeurs par défaut sont utilisées
      expect(dbClientMock.query).toHaveBeenCalledWith(
        expect.stringContaining('LIMIT 10 OFFSET 0'),
        expect.any(Array),
      );
    });

    test('should handle empty filter values', async () => {
      const req = {
        query: {
          name: '',
          code: '',
          areaMin: null,
          areaMax: null,
        },
      };

      dbClientMock.query.mockResolvedValue([{
        count: 1,
        area: 100,
        population: 1000,
        countriesNumber: 10,
        density: 10,
        countPagination: 1,
        areaPagination: 100,
        populationPagination: 1000,
        countriesNumberPagination: 10,
        densityPagination: 10,
        continents: [],
      }]);

      const result = await adapter.getItems(req);
      expect(result).toBeTruthy();
      expect(dbClientMock.query).toHaveBeenCalledWith(
        expect.stringContaining('WHERE 1 = 1'),
        expect.arrayContaining([]),
      );
    });
  });

  describe('addFilterCondition', () => {
    test('should add LIKE condition for string values', () => {
      const params = [];
      const result = adapter.addFilterCondition('WHERE 1 = 1', params, 'name', 'test', true);
      expect(result).toBe('WHERE 1 = 1 AND name LIKE ?');
      expect(params).toContain('%test%');
    });

    test('should add equals condition for non-string values', () => {
      const params = [];
      const result = adapter.addFilterCondition('WHERE 1 = 1', params, 'id', 1, false);
      expect(result).toBe('WHERE 1 = 1 AND id = ?');
      expect(params).toContain(1);
    });
  });

  describe('addRangeCondition', () => {
    test('should handle min and max values', () => {
      const params = [];
      const result = adapter.addRangeCondition('WHERE 1 = 1', params, 'population', '1000', '5000');
      expect(result).toBe('WHERE 1 = 1 AND population >= ? AND population <= ?');
      expect(params).toEqual([1000, 5000]);
    });

    test('should handle invalid number values', () => {
      const params = [];
      const result = adapter.addRangeCondition('WHERE 1 = 1', params, 'population', 'invalid', 'invalid');
      expect(result).toBe('WHERE 1 = 1');
      expect(params).toEqual([]);
    });
  });

  describe('addDensityCondition', () => {
    test('should handle density range conditions', () => {
      const params = [];
      const result = adapter.addDensityCondition('WHERE 1 = 1', params, '10.5', '20.5');
      expect(result).toContain('(population / NULLIF(area, 0)) >= ?');
      expect(result).toContain('(population / NULLIF(area, 0)) <= ?');
      expect(params).toEqual([10.5, 20.5]);
    });
  });

  describe('getItem', () => {
    test('should handle invalid id values', async () => {
      const invalidIds = ['abc', '-1', '99999999999999999999999'];

      for (const id of invalidIds) {
        const result = await adapter.getItem(id);
        expect(result).toBeNull();
        expect(dbClientMock.query).toHaveBeenCalledWith(
          expect.any(String),
          [0],
        );
      }
    });

    test('should handle empty result', async () => {
      dbClientMock.query.mockResolvedValue([]);

      const result = await adapter.getItem(1);
      expect(result).toBeNull();
    });
  });

  describe('parseValidNumber', () => {
    test('should handle various number formats', () => {
      expect(adapter.parseValidNumber('123', 0)).toBe(123);
      expect(adapter.parseValidNumber('-123', 0)).toBe(0);
      expect(adapter.parseValidNumber('abc', 0)).toBe(0);
      expect(adapter.parseValidNumber('0', 0)).toBe(0);
    });
  });

  // Tests existants pour createItem, updateItem, et deleteItem...
});

