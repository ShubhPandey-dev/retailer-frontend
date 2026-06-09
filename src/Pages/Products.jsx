import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);
  const [searchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [subcategory_id, setSubcategory_id] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  async function getData() {
    try {
      const result = await fetch(
        "https://ecom-common-backend.onrender.com/retailer/products/viewproducts"
      );
      const res = await result.json();

      setProducts(Array.isArray(res) ? res : res.data || []);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setSearchText(searchParams.get("search") || "");
  }, [searchParams]);

  async function addData(e) {
    e.preventDefault();

    if (!name || !price) {
      alert("Name & Price required");
      return;
    }

    try {
      const result = await fetch(
        "https://ecom-common-backend.onrender.com/retailer/products/addproducts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pname: name,
            subcategory_id,
            description,
            price,
            stock,
            image,
            status,
          }),
        }
      );

      const res = await result.json();

      alert(res.message || "Product Added");

      closeModal();
      getData();
    } catch (error) {
      console.error("Add Error:", error);
    }
  }

  async function updateData(e) {
    e.preventDefault();

    if (!name || !price) {
      alert("Name & Price required");
      return;
    }

    try {
      const result = await fetch(
        `https://ecom-common-backend.onrender.com/retailer/products/updateproducts/${editingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pname: name,
            subcategory_id,
            description,
            price,
            stock,
            image,
            status,
          }),
        }
      );

      const res = await result.json();

      alert(res.message || "Product Updated");

      closeModal();
      getData();
    } catch (error) {
      console.error("Update Error:", error);
    }
  }

  const handleEdit = (item) => {
    setEditingId(item.id);

    setName(item.pname);
    setSubcategory_id(item.subcategory_id);
    setPrice(item.price);
    setStock(item.stock);
    setDescription(item.description || "");
    setImage(item.image || "");
    setStatus(item.status || "Active");

    setShowForm(true);
  };

  const filteredProducts = products.filter((item) => {
    const search = searchText.trim().toLowerCase();

    if (!search) return true;

    return [
      item.id,
      item.pname,
      item.category_name,
      item.subcategory_name,
      item.price,
      item.stock,
      item.status,
    ]
      .filter((value) => value !== undefined && value !== null)
      .some((value) => String(value).toLowerCase().includes(search));
  });

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this product?");

    if (!confirmed) return;

    setDeleteLoadingId(id);

    try {
      const result = await fetch(
        `https://ecom-common-backend.onrender.com/retailer/products/deleteproducts/${id}`,
        {
          method: "DELETE",
        }
      );
      const res = await result.json();

      if (!result.ok) {
        alert(res.message || res.error || "Unable to delete product");
        return;
      }

      setProducts((currentProducts) =>
        currentProducts.filter((item) => item.id !== id)
      );
      alert(res.message || "Product Deleted Successfully");
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Server error while deleting product");
    } finally {
      setDeleteLoadingId(null);
    }
  };

  function closeModal() {
    setShowForm(false);
    setEditingId(null);
    resetForm();
  }

  function resetForm() {
    setName("");
    setSubcategory_id("");
    setStock("");
    setPrice("");
    setDescription("");
    setImage("");
    setStatus("Active");
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-bold text-slate-900">Products</h2>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="search"
            placeholder="Search products"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 sm:w-72"
          />

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Add Product
          </button>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="text-left px-4 py-3">ID</th>
            <th className="text-left px-4 py-3">Name</th>
            <th className="text-left px-4 py-3">Category</th>
            <th className="text-left px-4 py-3">Price</th>
            <th className="text-left px-4 py-3">Stock</th>
            <th className="text-left px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3 font-medium">{item.pname}</td>
                <td className="px-4 py-3">
                  {item.category_name || "-"}
                </td>
                <td className="px-4 py-3">{item.price}</td>

                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      item.stock > 10
                        ? "bg-emerald-100 text-emerald-700"
                        : item.stock > 0
                        ? "bg-amber-100 text-amber-700"
                        : "bg-rose-100 text-rose-700"
                    }`}
                  >
                    {item.stock} units
                  </span>
                </td>

                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deleteLoadingId === item.id}
                    className="px-3 py-1 bg-rose-100 text-rose-700 rounded-lg text-xs"
                  >
                    {deleteLoadingId === item.id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-6 text-slate-400">
                {searchText ? "No matching products found" : "No products found"}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-125 p-5 shadow-xl">
            <h3 className="text-lg font-bold mb-4">
              {editingId ? "Update Product" : "Add Product"}
            </h3>

            <form
              onSubmit={editingId ? updateData : addData}
              className="grid grid-cols-2 gap-3"
            >
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm col-span-2"
              />

              <input
                type="number"
                placeholder="Subcategory ID"
                value={subcategory_id}
                onChange={(e) => setSubcategory_id(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              />

              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              />

              <input
                type="text"
                placeholder="Image Name"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm col-span-2"
              />

              <div className="flex gap-2 col-span-2 justify-end mt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
                >
                  {editingId ? "Update Product" : "Save Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
