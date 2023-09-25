import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListService } from '../services/question'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

type OptionType = {
  isStart: boolean
  isDeleted: boolean
}

function useLoadQuestionData(opt: Partial<OptionType> = {}) {
  const { isStart, isDeleted } = opt
  const [searchParams] = useSearchParams()

  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''

      const data = await getQuestionListService({ keyword, isStart, isDeleted })
      return data
    },
    {
      refreshDeps: [searchParams],
    }
  )
  return { data, loading, error }
}

export default useLoadQuestionData
