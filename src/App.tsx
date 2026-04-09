import { useState } from "react";
import type { Machine } from "./types";

const initialForm: Machine = {
  id: 0,
  name: "",
  type: "",
  brand: "",
  model: "",
  year: 2020,
  pricePerDay: 0,
  status: "available",
};

export default function App() {
  const [machines, setMachines] = useState<Machine[]>([]);
  const [formData, setFormData] = useState<Machine>(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "year" || name === "pricePerDay" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Nombre requerido");
      return;
    }

    if (editingId) {
      setMachines(machines.map(m =>
        m.id === editingId ? { ...formData, id: editingId } : m
      ));
    } else {
      setMachines([...machines, { ...formData, id: Date.now() }]);
    }

    setFormData(initialForm);
    setEditingId(null);
  };

  const deleteMachine = (id: number) => {
    setMachines(machines.filter(m => m.id !== id));
  };

  const editMachine = (machine: Machine) => {
    setFormData(machine);
    setEditingId(machine.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌾 Agrotech - Maquinaria</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
        <input name="type" placeholder="Tipo" value={formData.type} onChange={handleChange} />
        <input name="brand" placeholder="Marca" value={formData.brand} onChange={handleChange} />
        <input name="model" placeholder="Modelo" value={formData.model} onChange={handleChange} />
        <input name="year" type="number" value={formData.year} onChange={handleChange} />
        <input name="pricePerDay" type="number" value={formData.pricePerDay} onChange={handleChange} />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="available">Disponible</option>
          <option value="in-use">En uso</option>
          <option value="maintenance">Mantenimiento</option>
        </select>

        <button type="submit">
          {editingId ? "Actualizar" : "Agregar"}
        </button>

        {editingId && (
          <button type="button" onClick={() => {
            setFormData(initialForm);
            setEditingId(null);
          }}>
            Cancelar
          </button>
        )}
      </form>

      <hr />

      <h2>Listado</h2>

      {machines.length === 0 && <p>No hay maquinaria</p>}

      {machines.map(machine => (
        <div key={machine.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{machine.name}</h3>
          <p>{machine.brand} - {machine.model}</p>
          <p>Año: {machine.year}</p>
          <p>${machine.pricePerDay}/día</p>
          <p>Estado: {machine.status}</p>

          <button onClick={() => editMachine(machine)}>Editar</button>
          <button onClick={() => deleteMachine(machine.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}