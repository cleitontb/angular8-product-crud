<?php

namespace App\Http\Controllers;

use App\Product;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() { }

    /**
     * Get all products
     */
    public function get()
    {
        return Product::all();
    }

    /**     
     * Delete product
     */
    public function delete($id)
    {
        $product = Product::find((integer)$id);
        $product->delete();
    }

}
