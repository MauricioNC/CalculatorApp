require "test_helper"

class MathsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get maths_index_url
    assert_response :success
  end
end
