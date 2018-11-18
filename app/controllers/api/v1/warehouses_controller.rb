module Api::V1
  class WarehousesController < ApplicationController
    def index
      @warehouses_total = Warehouse.all
      @warehouses_50 = Warehouse.near([0,0],50)
      @warehouses_20 = Warehouse.near([0,0],20)
     
      render json: { warehouses: @warehouses_total, warehouses_50: @warehouses_50, warehouses_20: @warehouses_20 }
    end
  
    private
   
      def set_warehouse
        @warehouse = Warehouse.find(params[:id])
      end
  
      def warehouse_params
        params.require(:warehouse).permit(:internal_id, :name, :address, :location, :latitude, :longitude, :rating, :temperature, :capacity_sq_ft)
      end
  end
end

