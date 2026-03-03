import { useState } from 'react'

interface Maquinaria {
  id: string
  nombre: string
  categoria: string
  precio: number
  disponible: boolean
}

const data: Maquinaria[] = [
  { id: '1', nombre: 'Tractor John Deere', categoria: 'Tractor', precio: 180000000, disponible: true },
  { id: '2', nombre: 'Cosechadora Case IH', categoria: 'Cosechadora', precio: 950000000, disponible: false },
  { id: '3', nombre: 'Sembradora Massey', categoria: 'Sembradora', precio: 320000000, disponible: true },
  { id: '4', nombre: 'Pulverizadora Jacto', categoria: 'Pulverizadora', precio: 410000000, disponible: true }
]

function App() {
  const [search, setSearch] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [orden, setOrden] = useState('asc')

  let resultado = [...data]

  // Búsqueda
  resultado = resultado.filter(item =>
    item.nombre.toLowerCase().includes(search.toLowerCase())
  )

  // Filtro
  if (categoria !== 'Todas') {
    resultado = resultado.filter(item => item.categoria === categoria)
  }

  // Orden
  resultado.sort((a, b) =>
    orden === 'asc' ? a.precio - b.precio : b.precio - a.precio
  )

  return (
    <div style={{ padding: 40 }}>
      <h1>🚜 Agrotech - Maquinaria Agrícola</h1>

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Tractor">Tractor</option>
        <option value="Cosechadora">Cosechadora</option>
        <option value="Sembradora">Sembradora</option>
        <option value="Pulverizadora">Pulverizadora</option>
      </select>

      <select value={orden} onChange={e => setOrden(e.target.value)}>
        <option value="asc">Precio menor a mayor</option>
        <option value="desc">Precio mayor a menor</option>
      </select>

      <p>Resultados: {resultado.length}</p>

      {resultado.length === 0 && <p>No hay resultados</p>}

      {resultado.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
          <h3>{item.nombre}</h3>
          <p>Categoría: {item.categoria}</p>
          <p>Precio: ${item.precio.toLocaleString()}</p>
          <strong>
            {item.disponible ? '🟢 Disponible' : '🔴 No disponible'}
          </strong>
        </div>
      ))}
    </div>
  )
}

export default App