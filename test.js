const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function merge(first, second) {
  const result = [];
  for (const item of first) {
    const index = second.findIndex((i) => i.uuid === item.uuid);
    if (index !== -1) {
      const { uuid, name, role } = { ...item, ...second[index] };
      result.push({ uuid, name, role });
    } else {
      const { uuid, name } = item;
      result.push({ uuid, name, role: null });
    }
  }
  for (const item of second) {
    const index = first.findIndex((i) => i.uuid === item.uuid);
    if (index !== -1) {
      const { uuid, name, role } = { ...item, ...first[index] };
      result.push({ uuid, name, role });
    } else {
      const { uuid, role } = item;
      result.push({ uuid, name: null, role });
    }
  }
  return result.sort((a, b) => a.uuid - b.uuid);
}

const removeDuplicates = merge(first, second).filter(
  (value, index, self) =>
    index ===
    self.findIndex((t) => t.uuid === value.uuid && t.name === value.name)
);
console.log(removeDuplicates);
