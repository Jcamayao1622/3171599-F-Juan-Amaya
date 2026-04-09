export interface Machine {
  id: number;
  name: string;
  type: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  status: 'available' | 'in-use' | 'maintenance';
}