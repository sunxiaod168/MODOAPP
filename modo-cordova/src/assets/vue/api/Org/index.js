import base from 'api/base'

const api = {
	orgList: function (params) {
		var type = params.type;
		var url = '';
		switch (type) {
			case 'retail-price':
			case 'order-progress':
			case 'order':
			case 'achievement':
				url = '/org/AllDescendantSaleTree';
				break;
			case 'cost-price':
				url = '/org/AllSelfManageUnitTree';
				break;
			case 'inventory':
				url = '/org/AllStorages';
				break;
			case 'asset':
				url = '/org/SelfAndDescendantManageUnit';
				break;
			case 'profit':
			case 'income-expense':
				url = '/org/AllDescendantCostAndProfitTree';
				break;
			default:
				break;
		}
		return base.post(url);
	}
}

export default api