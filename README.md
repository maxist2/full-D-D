# full-D-D

## 🏰🧙‍♂️💼 Aplicación Web para la Gestión de Turnos e Inventario en Dungeons & Dragons

### 🎯📜 Requerimientos

### ⚔️🎭 Gestión de Turnos

1. ❤️ **Puntos de golpe (HP)** con colores indicativos: ✅

   - 🟢 Verde: > 75%✅
   - 🟡 Amarillo: >50%✅
   - 🟠 naranja <50%✅
   - 🔴 Rojo: >25%✅
   - 🔵 **Azul:** Vida adicional.✅

2. 🏃‍♂️ **Movimiento** ✅

3. 🎭 **Acciones** con botones para marcarlas como usadas: ✅

   - 🗡️ **Acción estándar**.
   - ⚡ **Acción adicional**.
   - 🛡️ **Reacción**.
   - 🌟 **Inspiración** (solo si se marca previamente y se gasta al usarse).

4. 📜 **Espacios de hechizo** con contadores decrecientes y una lista de hechizos:

   - 📖 **Lista de Hechizos Conocidos y Preparados**:
     - 🔢 Nivel (LV)
     - ✨ Nombre
     - ⏳ Tiempo de lanzamiento
     - ⏱️ Duración
     - 🎯 Tipo de tirada (ataque o salvación)
     - ✅ Componentes (C, V, S, R, M)
     - 📜 Descripción
   - 🔥 **Seguimiento de Concentración**:
     - ⚠️ Aviso en pantalla hasta interrupción.
     - ⏲️ Contador de turnos (6s cada uno).

5. ⚰️ **Salvaciones de muerte**:

   - 🆘 **Botón "¡Ayuda!"** para salvar automáticamente.
   - ✅ **3 éxitos:** Recupera 1 HP.
   - ❌ **Estado inactivo:** No puede moverse ni realizar acciones.

6. ⚙️ **Opciones de Configuración**:

   - 🏷️ **Cambio de nombre**.
   - 💖 **Configuración de HP máximo, velocidad y espacios de hechizo**.
   - 🎨 **Personalización avanzada** (atajos, nombres de secciones).
   - 📜 **Reglas caseras**.
   - 📂 **Exportación de datos** (JSON/PDF).

### 📊🎭 Estadísticas del Personaje

1. 💪 **Atributos principales** con valores y modificadores:
   - ⚔️ **Fuerza (STR)**
   - 🏹 **Destreza (DEX)**
   - 💖 **Constitución (CON)**
   - 📚 **Inteligencia (INT)**
   - 🧙‍♂️ **Sabiduría (WIS)**
   - 😍 **Carisma (CHA)**

2. 🎲 **Tiradas de Salvación** con competencia.
3. 🏆 **Habilidades** con bonificadores automáticos.
4. 🛡️ **Clase de Armadura (CA)** automática.
5. ⚡ **Iniciativa** con modificadores.
6. 🚀 **Velocidad** según raza/equipo.
7. 🛠️ **Proficiencia** en armas/herramientas.

### 🎒📦 Gestión de Inventario

1. 📂 **Estructura en árbol** (carpetas/objetos).
2. 🏷️ **Cada objeto muestra**:
   - ⚖️ **Peso** (kg/lb).
   - 🔢 **Cantidad**.
   - 💰 **Valor en monedas**.
3. 📊 **Resumen financiero y de peso**.
4. 🏗️ **Carga Máxima** automática.
5. 🛠️ **Durabilidad de Objetos**.
6. ⚔️ **Armas equipadas** en acceso rápido.
7. 🧴 **Consumibles** (ej. pociones con frascos vacíos tras uso).

### 💰🏦 Sistema de Monedas

| D&D | 🔣 | Waterdeep | 🔣 | Valor D&D |
| ---- | -- | --------- | -- | -------- |
| 🟡 Cobre | 🪙 | Nib | 🪙 | 1 pc |
| ⚪ Plata | 💿 | Shard | 💿 | 1 ps |
| 🟤 Oro | 🐲 | Dragón | 🐲 | 1 po |
| 🔘 Platino | ☀️ | Sol | ☀️ | 1 pp |
| - | - | Taol | ♠️ | 2 po |
| - | - | Luna del Puerto | 🌙 | 50 po |

### 🎲⚡ Funciones Extra

1. 🚥 **Condiciones** (🔥 Envenenado, 🩸 Paralizado, 👁️ Cegado, etc.).
2. 🌗 **Modo Oscuro/Claro**.
3. 📜 **Historial de Turnos**.
4. 📖 **Registro de Actividades** (daño, objetos usados, etc.).

### 🌍👥 Conectividad Multijugador

1. 🔄 **Sincronización de estados** con otros jugadores.
2. 📜 **Sección de Personajes**.

### 🆘📖 Sección de Ayuda

1. 💰 **Conversor de Monedas**.
2. ⚠️ **Explicación de Condiciones**.
3. ⌨️ **Guía de Atajos**.
4. ❓ **FAQ**.
5. 📜 **Modo de Uso**.

### 🖥️🐍 Backend (Python - Flask/FastAPI)

1. 🌍 **Servidor de la aplicación**.
2. 💾 **Gestor de datos JSON**.
3. 🔄 **Endpoints REST** para actualizaciones.
4. 📦 **Lógica avanzada de inventario**.

🛠️ **Código modular, claro y eficiente** con una **UI intuitiva** y sin frameworks pesados en frontend.
