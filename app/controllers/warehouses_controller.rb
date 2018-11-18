class WarehousesController < ApplicationController

  def index
    @warehouses = Warehouse.all

    render json: @warehouses
  end

 
  private
 
    def set_warehouse
      @warehouse = Warehouse.find(params[:id])
    end

    def warehouse_params
      params.require(:warehouse).permit(:internal_id, :name, :address, :location, :latitude, :longitude, :rating, :temperature, :capacity_sq_ft)
    end
end
